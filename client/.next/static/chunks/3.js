(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./modules/Search/Components/SearchPresent.tsx":
/*!*****************************************************!*\
  !*** ./modules/Search/Components/SearchPresent.tsx ***!
  \*****************************************************/
/*! exports provided: SearchPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPresent", function() { return SearchPresent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./modules/Search/Components/styles.ts");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Search\\Components\\SearchPresent.tsx",
    _this = undefined;




var SearchPresent = function SearchPresent(_ref) {
  var data = _ref.data,
      formik = _ref.formik,
      value = _ref.value,
      setValue = _ref.setValue,
      ready = _ref.ready,
      status = _ref.status;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].input),
      type: "text",
      value: value,
      onChange: function onChange(e) {
        setValue(e.target.value);
      },
      disabled: !ready,
      placeholder: "\u041F\u043E\u0448\u0443\u043A \u043D\u0430 Google \u041A\u0430\u0440\u0442\u0430\u0445"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this), data.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].select),
      size: data.length,
      id: "description",
      name: "description",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      children: status === 'OK' && data.map(function (value, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          onClick: formik.handleSubmit,
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].option),
          value: value.description,
          children: value.description
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 16
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 27
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, _this);
};
_c = SearchPresent;

var _c;

$RefreshReg$(_c, "SearchPresent");

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

/***/ "./modules/Search/Components/styles.ts":
/*!*********************************************!*\
  !*** ./modules/Search/Components/styles.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variabels */ "./variabels/index.ts");


/* harmony default export */ __webpack_exports__["default"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 60,
    right: 10,
    width: 400
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "4px 4px 10px 1px ".concat(_variabels__WEBPACK_IMPORTED_MODULE_1__["shadows"].shadow)
  },
  input: {
    padding: 10,
    fontSize: '1.4rem',
    border: "1px solid ".concat(_variabels__WEBPACK_IMPORTED_MODULE_1__["borders"].borderInput)
  },
  select: {
    overflow: 'hidden',
    border: "1px solid ".concat(_variabels__WEBPACK_IMPORTED_MODULE_1__["borders"].borderInput),
    padding: 0
  },
  option: {
    padding: 10,
    fontSize: '1.2rem',
    cursor: 'pointer',
    ':hover': {
      color: _variabels__WEBPACK_IMPORTED_MODULE_1__["text"].hover
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

/***/ "./modules/Search/Containers/Search.tsx":
/*!**********************************************!*\
  !*** ./modules/Search/Containers/Search.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_web_travel_guide_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-places-autocomplete */ "./node_modules/use-places-autocomplete/dist/index.esm.js");
/* harmony import */ var _Components_SearchPresent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/SearchPresent */ "./modules/Search/Components/SearchPresent.tsx");




var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Search\\Containers\\Search.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Search = function Search(_ref) {
  _s();

  var panTo = _ref.panTo;

  var _usePlacesAutocomplet = Object(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"])({
    requestOptions: {
      // @ts-ignore
      location: {
        lat: function lat() {
          return 49.026151;
        },
        lng: function lng() {
          return 31.483070;
        }
      },
      radius: 50 * 1000
    }
  }),
      ready = _usePlacesAutocomplet.ready,
      value = _usePlacesAutocomplet.value,
      _usePlacesAutocomplet2 = _usePlacesAutocomplet.suggestions,
      status = _usePlacesAutocomplet2.status,
      data = _usePlacesAutocomplet2.data,
      setValue = _usePlacesAutocomplet.setValue,
      clearSuggestions = _usePlacesAutocomplet.clearSuggestions;

  var initialValues = {
    description: ''
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_web_travel_guide_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var results, _yield$getLatLng, lat, lng;

      return D_web_travel_guide_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValue(values.description, false);
              clearSuggestions();
              _context.prev = 2;
              _context.next = 5;
              return Object(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["getGeocode"])({
                address: values.description
              });

            case 5:
              results = _context.sent;
              _context.next = 8;
              return Object(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["getLatLng"])(results[0]);

            case 8:
              _yield$getLatLng = _context.sent;
              lat = _yield$getLatLng.lat;
              lng = _yield$getLatLng.lng;
              panTo({
                lat: lat,
                lng: lng
              });
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    children: function children(formik) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_SearchPresent__WEBPACK_IMPORTED_MODULE_6__["SearchPresent"], {
          data: data,
          formik: formik,
          value: value,
          setValue: setValue,
          ready: ready,
          status: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 14
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, _this);
};

_s(Search, "I3lrUC33pdqiXvC1QcGoJ0/giUk=", false, function () {
  return [use_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/use-places-autocomplete/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-places-autocomplete/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: default, getDetails, getGeocode, getLatLng, getZipCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetails", function() { return getDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeocode", function() { return getGeocode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatLng", function() { return getLatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZipCode", function() { return getZipCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
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

var useLatest = (function (val) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(val);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = val;
  });
  return ref;
});

var _debounce = (function (fn, wait) {
  var timer; // eslint-disable-next-line func-names

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
});

var loadApiErr = "💡 use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library";

var usePlacesAutocomplete = function usePlacesAutocomplete(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      requestOptions = _ref.requestOptions,
      _ref$debounce = _ref.debounce,
      debounce = _ref$debounce === void 0 ? 200 : _ref$debounce,
      googleMaps = _ref.googleMaps,
      callbackName = _ref.callbackName,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? "" : _ref$defaultValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ready = _useState[0],
      setReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),
      value = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: false,
    status: "",
    data: []
  }),
      suggestions = _useState3[0],
      setSuggestions = _useState3[1];

  var asRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var requestOptionsRef = useLatest(requestOptions);
  var googleMapsRef = useLatest(googleMaps);
  var init = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var _google$maps;

    var _window = window,
        google = _window.google;
    var gMaps = googleMapsRef.current;
    var placesLib = (gMaps == null ? void 0 : gMaps.places) || (google == null ? void 0 : (_google$maps = google.maps) == null ? void 0 : _google$maps.places);

    if (!placesLib) {
      console.error(loadApiErr);
      return;
    }

    asRef.current = new placesLib.AutocompleteService();
    setReady(true);
  }, []);
  var clearSuggestions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setSuggestions({
      loading: false,
      status: "",
      data: []
    });
  }, []);
  var fetchPredictions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(_debounce(function (val) {
    if (!val) {
      clearSuggestions();
      return;
    } // To keep the previous suggestions


    setSuggestions(function (prevState) {
      return _extends({}, prevState, {
        loading: true
      });
    }); // @ts-expect-error

    asRef.current.getPlacePredictions(_extends({}, requestOptionsRef.current, {
      input: val
    }), function (data, status) {
      setSuggestions({
        loading: false,
        status: status,
        data: data || []
      });
    });
  }, debounce), [debounce, clearSuggestions]);
  var setValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (val, shouldFetchData) {
    if (shouldFetchData === void 0) {
      shouldFetchData = true;
    }

    setVal(val);
    if (shouldFetchData) fetchPredictions(val);
  }, [fetchPredictions]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _window2 = window,
        google = _window2.google;

    if (!googleMapsRef.current && !(google == null ? void 0 : google.maps) && callbackName) {
      window[callbackName] = init;
    } else {
      init();
    }

    return function () {
      // @ts-expect-error
      if (window[callbackName]) delete window[callbackName];
    };
  }, [callbackName, init]);
  return {
    ready: ready,
    value: value,
    suggestions: suggestions,
    setValue: setValue,
    clearSuggestions: clearSuggestions
  };
};

/* eslint-disable compat/compat */
var geocodeErr = "💡 use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions.";
var getGeocode = function getGeocode(args) {
  var geocoder = new window.google.maps.Geocoder();
  return new Promise(function (resolve, reject) {
    geocoder.geocode(args, function (results, status) {
      if (status !== "OK") reject(status);

      if (!args.address && args.componentRestrictions) {
        console.error(geocodeErr);
        resolve(results);
      }

      resolve(results);
    });
  });
};
var getLatLng = function getLatLng(result) {
  return new Promise(function (resolve, reject) {
    try {
      var _result$geometry$loca = result.geometry.location,
          lat = _result$geometry$loca.lat,
          lng = _result$geometry$loca.lng;
      resolve({
        lat: lat(),
        lng: lng()
      });
    } catch (error) {
      reject(error);
    }
  });
};
var getZipCode = function getZipCode(result, useShortName) {
  return new Promise(function (resolve, reject) {
    try {
      var zipCode = null;
      result.address_components.forEach(function (_ref) {
        var long_name = _ref.long_name,
            short_name = _ref.short_name,
            types = _ref.types;
        if (types.includes("postal_code")) zipCode = useShortName ? short_name : long_name;
      });
      resolve(zipCode);
    } catch (error) {
      reject(error);
    }
  });
};
var getDetailsErr = "💡use-places-autocomplete: Please provide a place Id when using getDetails() either as a string or as part of an Autocomplete Prediction.";
var getDetails = function getDetails(args) {
  var PlacesService = new window.google.maps.places.PlacesService(document.createElement("div"));

  if (!args.placeId) {
    console.error(getDetailsErr);
    return Promise.reject(getDetailsErr);
  }

  return new Promise(function (resolve, reject) {
    PlacesService.getDetails(args, function (results, status) {
      if (status !== "OK") reject(status);
      resolve(results);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (usePlacesAutocomplete);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TZWFyY2gvQ29tcG9uZW50cy9TZWFyY2hQcmVzZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TZWFyY2gvQ29tcG9uZW50cy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvU2VhcmNoL0NvbnRhaW5lcnMvU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2UtcGxhY2VzLWF1dG9jb21wbGV0ZS9kaXN0L2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJTZWFyY2hQcmVzZW50IiwiZGF0YSIsImZvcm1payIsInZhbHVlIiwic2V0VmFsdWUiLCJyZWFkeSIsInN0YXR1cyIsImNzcyIsInN0eWxlcyIsIndyYXBwZXIiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJzZWxlY3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwibWFwIiwiaW5kZXgiLCJoYW5kbGVTdWJtaXQiLCJvcHRpb24iLCJkZXNjcmlwdGlvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsInJpZ2h0Iiwid2lkdGgiLCJmb3JtIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic2hhZG93IiwicGFkZGluZyIsImZvbnRTaXplIiwiYm9yZGVyIiwiYm9yZGVycyIsImJvcmRlcklucHV0Iiwib3ZlcmZsb3ciLCJjdXJzb3IiLCJjb2xvciIsInRleHQiLCJob3ZlciIsIlNlYXJjaCIsInBhblRvIiwidXNlUGxhY2VzQXV0b2NvbXBsZXRlIiwicmVxdWVzdE9wdGlvbnMiLCJsb2NhdGlvbiIsImxhdCIsImxuZyIsInJhZGl1cyIsInN1Z2dlc3Rpb25zIiwiY2xlYXJTdWdnZXN0aW9ucyIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImdldEdlb2NvZGUiLCJhZGRyZXNzIiwicmVzdWx0cyIsImdldExhdExuZyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdPLElBQU1BLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLE9BQXNEO0FBQUEsTUFBbkRDLElBQW1ELFFBQW5EQSxJQUFtRDtBQUFBLE1BQTdDQyxNQUE2QyxRQUE3Q0EsTUFBNkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFFL0csc0JBQU87QUFBSyxhQUFTLEVBQUdDLGtFQUFHLENBQUNDLCtDQUFNLENBQUNDLE9BQVIsQ0FBcEI7QUFBQSw0QkFDTDtBQUNFLGVBQVMsRUFBR0Ysa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ0UsS0FBUixDQURqQjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsV0FBSyxFQUFHUCxLQUhWO0FBSUUsY0FBUSxFQUFHLGtCQUFBUSxDQUFDLEVBQUk7QUFDZFAsZ0JBQVEsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNULEtBQVYsQ0FBUjtBQUNELE9BTkg7QUFPRSxjQUFRLEVBQUcsQ0FBQ0UsS0FQZDtBQVFFLGlCQUFXLEVBQUM7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssRUFZSEosSUFBSSxDQUFDWSxNQUFMLEtBQWdCLENBQWhCLGdCQUFvQjtBQUFRLGVBQVMsRUFBR04sa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ00sTUFBUixDQUF2QjtBQUF5QyxVQUFJLEVBQUdiLElBQUksQ0FBQ1ksTUFBckQ7QUFBOEQsUUFBRSxFQUFDLGFBQWpFO0FBQStFLFVBQUksRUFBQyxhQUFwRjtBQUFrRyxj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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiYXBocm9kaXRlL25vLWltcG9ydGFudFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG50eXBlIFNlYXJjaFByZXNlbnRQcm9wcyA9IHtcclxuICBkYXRhOiBhbnlcclxuICBmb3JtaWs6IGFueVxyXG4gIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICBzZXRWYWx1ZTogYW55XHJcbiAgcmVhZHk6IGFueVxyXG4gIHN0YXR1czogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQcmVzZW50OiBSZWFjdC5GQzxTZWFyY2hQcmVzZW50UHJvcHM+ID0gKHsgZGF0YSwgZm9ybWlrLCB2YWx1ZSwgc2V0VmFsdWUsIHJlYWR5LCBzdGF0dXMgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLndyYXBwZXIpIH0+XHJcbiAgICA8aW5wdXRcclxuICAgICAgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5pbnB1dCkgfVxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHZhbHVlPXsgdmFsdWUgfVxyXG4gICAgICBvbkNoYW5nZT17IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICB9fVxyXG4gICAgICBkaXNhYmxlZD17ICFyZWFkeSB9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSfQn9C+0YjRg9C6INC90LAgR29vZ2xlINCa0LDRgNGC0LDRhSdcclxuICAgIC8+XHJcblxyXG4gICAgeyBkYXRhLmxlbmd0aCAhPT0gMCA/IDxzZWxlY3QgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5zZWxlY3QpIH0gc2l6ZT17IGRhdGEubGVuZ3RoIH0gaWQ9J2Rlc2NyaXB0aW9uJyBuYW1lPSdkZXNjcmlwdGlvbicgb25DaGFuZ2U9eyBmb3JtaWsuaGFuZGxlQ2hhbmdlIH0gb25CbHVyPXsgZm9ybWlrLmhhbmRsZUJsdXIgfSA+XHJcbiAgICAgIHsgc3RhdHVzID09PSAnT0snICYmIGRhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gPG9wdGlvbiBvbkNsaWNrPXsgZm9ybWlrLmhhbmRsZVN1Ym1pdCB9IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMub3B0aW9uKSB9IGtleT17aW5kZXh9IHZhbHVlPXt2YWx1ZS5kZXNjcmlwdGlvbn0+eyB2YWx1ZS5kZXNjcmlwdGlvbiB9PC9vcHRpb24+XHJcbiAgICAgIH0pIH1cclxuICAgIDwvc2VsZWN0PiA6IG51bGwgfVxyXG4gIDwvZGl2PlxyXG59IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnXHJcblxyXG5pbXBvcnQgeyBib3JkZXJzLCBzaGFkb3dzLCB0ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdmFyaWFiZWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgekluZGV4OiAxMCxcclxuICAgIHRvcDogNjAsXHJcbiAgICByaWdodDogMTAsXHJcbiAgICB3aWR0aDogNDAwXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGJveFNoYWRvdzogYDRweCA0cHggMTBweCAxcHggJHtzaGFkb3dzLnNoYWRvd31gXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBmb250U2l6ZTogJzEuNHJlbScsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHsgYm9yZGVycy5ib3JkZXJJbnB1dCB9YFxyXG4gIH0sXHJcbiAgc2VsZWN0OiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHsgYm9yZGVycy5ib3JkZXJJbnB1dCB9YCxcclxuICAgIHBhZGRpbmc6IDBcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiB0ZXh0LmhvdmVyXHJcbiAgICB9XHJcbiAgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSwgeyBnZXRHZW9jb2RlLCBnZXRMYXRMbmcgfSBmcm9tICd1c2UtcGxhY2VzLWF1dG9jb21wbGV0ZSdcclxuaW1wb3J0IHsgU2VhcmNoUHJlc2VudCB9IGZyb20gXCIuLi9Db21wb25lbnRzL1NlYXJjaFByZXNlbnRcIlxyXG5cclxuY29uc3QgU2VhcmNoID0gKHsgcGFuVG8gfSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZHksIHZhbHVlLCBzdWdnZXN0aW9uczogeyBzdGF0dXMsIGRhdGEgfSwgc2V0VmFsdWUsIGNsZWFyU3VnZ2VzdGlvbnMgfSA9IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSh7XHJcbiAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGxvY2F0aW9uOiB7IGxhdDogKCkgPT4gNDkuMDI2MTUxLCBsbmc6ICgpID0+IDMxLjQ4MzA3MCB9LFxyXG4gICAgICByYWRpdXM6IDUwICogMTAwMFxyXG4gICAgfSxcclxuICB9KVxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogJydcclxuICB9XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICBzZXRWYWx1ZSh2YWx1ZXMuZGVzY3JpcHRpb24sIGZhbHNlKVxyXG4gICAgY2xlYXJTdWdnZXN0aW9ucygpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2V0R2VvY29kZSh7IGFkZHJlc3M6IHZhbHVlcy5kZXNjcmlwdGlvbiB9KVxyXG4gICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSlcclxuICAgICAgcGFuVG8oeyBsYXQsIGxuZyB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPEZvcm1payBpbml0aWFsVmFsdWVzPXsgaW5pdGlhbFZhbHVlcyB9IG9uU3VibWl0PXsgb25TdWJtaXQgfSA+XHJcbiAgICB7Zm9ybWlrID0+IHtcclxuICAgICAgcmV0dXJuIDxGb3JtPlxyXG4gICAgICAgIDxTZWFyY2hQcmVzZW50IGRhdGE9eyBkYXRhIH0gZm9ybWlrPXsgZm9ybWlrIH0gdmFsdWU9eyB2YWx1ZSB9IHNldFZhbHVlPXsgc2V0VmFsdWUgfSByZWFkeT17IHJlYWR5IH0gc3RhdHVzPXsgc3RhdHVzIH0gLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgfX1cclxuICA8L0Zvcm1paz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxudmFyIHVzZUxhdGVzdCA9IChmdW5jdGlvbiAodmFsKSB7XG4gIHZhciByZWYgPSB1c2VSZWYodmFsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbDtcbiAgfSk7XG4gIHJldHVybiByZWY7XG59KTtcblxudmFyIF9kZWJvdW5jZSA9IChmdW5jdGlvbiAoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWVyOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG59KTtcblxudmFyIGxvYWRBcGlFcnIgPSBcIvCfkqEgdXNlLXBsYWNlcy1hdXRvY29tcGxldGU6IEdvb2dsZSBNYXBzIFBsYWNlcyBBUEkgbGlicmFyeSBtdXN0IGJlIGxvYWRlZC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vd2VsbHlzaGVuL3VzZS1wbGFjZXMtYXV0b2NvbXBsZXRlI2xvYWQtdGhlLWxpYnJhcnlcIjtcblxudmFyIHVzZVBsYWNlc0F1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIHVzZVBsYWNlc0F1dG9jb21wbGV0ZShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgcmVxdWVzdE9wdGlvbnMgPSBfcmVmLnJlcXVlc3RPcHRpb25zLFxuICAgICAgX3JlZiRkZWJvdW5jZSA9IF9yZWYuZGVib3VuY2UsXG4gICAgICBkZWJvdW5jZSA9IF9yZWYkZGVib3VuY2UgPT09IHZvaWQgMCA/IDIwMCA6IF9yZWYkZGVib3VuY2UsXG4gICAgICBnb29nbGVNYXBzID0gX3JlZi5nb29nbGVNYXBzLFxuICAgICAgY2FsbGJhY2tOYW1lID0gX3JlZi5jYWxsYmFja05hbWUsXG4gICAgICBfcmVmJGRlZmF1bHRWYWx1ZSA9IF9yZWYuZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZiRkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfcmVmJGRlZmF1bHRWYWx1ZTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgcmVhZHkgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRSZWFkeSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgX3VzZVN0YXRlMiA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksXG4gICAgICB2YWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWYWwgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHN0YXR1czogXCJcIixcbiAgICBkYXRhOiBbXVxuICB9KSxcbiAgICAgIHN1Z2dlc3Rpb25zID0gX3VzZVN0YXRlM1swXSxcbiAgICAgIHNldFN1Z2dlc3Rpb25zID0gX3VzZVN0YXRlM1sxXTtcblxuICB2YXIgYXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciByZXF1ZXN0T3B0aW9uc1JlZiA9IHVzZUxhdGVzdChyZXF1ZXN0T3B0aW9ucyk7XG4gIHZhciBnb29nbGVNYXBzUmVmID0gdXNlTGF0ZXN0KGdvb2dsZU1hcHMpO1xuICB2YXIgaW5pdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2dvb2dsZSRtYXBzO1xuXG4gICAgdmFyIF93aW5kb3cgPSB3aW5kb3csXG4gICAgICAgIGdvb2dsZSA9IF93aW5kb3cuZ29vZ2xlO1xuICAgIHZhciBnTWFwcyA9IGdvb2dsZU1hcHNSZWYuY3VycmVudDtcbiAgICB2YXIgcGxhY2VzTGliID0gKGdNYXBzID09IG51bGwgPyB2b2lkIDAgOiBnTWFwcy5wbGFjZXMpIHx8IChnb29nbGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfZ29vZ2xlJG1hcHMgPSBnb29nbGUubWFwcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9nb29nbGUkbWFwcy5wbGFjZXMpO1xuXG4gICAgaWYgKCFwbGFjZXNMaWIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobG9hZEFwaUVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXNSZWYuY3VycmVudCA9IG5ldyBwbGFjZXNMaWIuQXV0b2NvbXBsZXRlU2VydmljZSgpO1xuICAgIHNldFJlYWR5KHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBjbGVhclN1Z2dlc3Rpb25zID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldFN1Z2dlc3Rpb25zKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc3RhdHVzOiBcIlwiLFxuICAgICAgZGF0YTogW11cbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgZmV0Y2hQcmVkaWN0aW9ucyA9IHVzZUNhbGxiYWNrKF9kZWJvdW5jZShmdW5jdGlvbiAodmFsKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIGNsZWFyU3VnZ2VzdGlvbnMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRvIGtlZXAgdGhlIHByZXZpb3VzIHN1Z2dlc3Rpb25zXG5cblxuICAgIHNldFN1Z2dlc3Rpb25zKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pOyAvLyBAdHMtZXhwZWN0LWVycm9yXG5cbiAgICBhc1JlZi5jdXJyZW50LmdldFBsYWNlUHJlZGljdGlvbnMoX2V4dGVuZHMoe30sIHJlcXVlc3RPcHRpb25zUmVmLmN1cnJlbnQsIHtcbiAgICAgIGlucHV0OiB2YWxcbiAgICB9KSwgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgc2V0U3VnZ2VzdGlvbnMoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIGRhdGE6IGRhdGEgfHwgW11cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBkZWJvdW5jZSksIFtkZWJvdW5jZSwgY2xlYXJTdWdnZXN0aW9uc10pO1xuICB2YXIgc2V0VmFsdWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsLCBzaG91bGRGZXRjaERhdGEpIHtcbiAgICBpZiAoc2hvdWxkRmV0Y2hEYXRhID09PSB2b2lkIDApIHtcbiAgICAgIHNob3VsZEZldGNoRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0VmFsKHZhbCk7XG4gICAgaWYgKHNob3VsZEZldGNoRGF0YSkgZmV0Y2hQcmVkaWN0aW9ucyh2YWwpO1xuICB9LCBbZmV0Y2hQcmVkaWN0aW9uc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfd2luZG93MiA9IHdpbmRvdyxcbiAgICAgICAgZ29vZ2xlID0gX3dpbmRvdzIuZ29vZ2xlO1xuXG4gICAgaWYgKCFnb29nbGVNYXBzUmVmLmN1cnJlbnQgJiYgIShnb29nbGUgPT0gbnVsbCA/IHZvaWQgMCA6IGdvb2dsZS5tYXBzKSAmJiBjYWxsYmFja05hbWUpIHtcbiAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gaW5pdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICBpZiAod2luZG93W2NhbGxiYWNrTmFtZV0pIGRlbGV0ZSB3aW5kb3dbY2FsbGJhY2tOYW1lXTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2tOYW1lLCBpbml0XSk7XG4gIHJldHVybiB7XG4gICAgcmVhZHk6IHJlYWR5LFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMsXG4gICAgc2V0VmFsdWU6IHNldFZhbHVlLFxuICAgIGNsZWFyU3VnZ2VzdGlvbnM6IGNsZWFyU3VnZ2VzdGlvbnNcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBhdC9jb21wYXQgKi9cbnZhciBnZW9jb2RlRXJyID0gXCLwn5KhIHVzZS1wbGFjZXMtYXV0b2NvbXBsZXRlOiBQbGVhc2UgcHJvdmlkZSBhbiBhZGRyZXNzIHdoZW4gdXNpbmcgZ2V0R2VvY29kZSgpIHdpdGggdGhlIGNvbXBvbmVudFJlc3RyaWN0aW9ucy5cIjtcbnZhciBnZXRHZW9jb2RlID0gZnVuY3Rpb24gZ2V0R2VvY29kZShhcmdzKSB7XG4gIHZhciBnZW9jb2RlciA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBnZW9jb2Rlci5nZW9jb2RlKGFyZ3MsIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMgIT09IFwiT0tcIikgcmVqZWN0KHN0YXR1cyk7XG5cbiAgICAgIGlmICghYXJncy5hZGRyZXNzICYmIGFyZ3MuY29tcG9uZW50UmVzdHJpY3Rpb25zKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZ2VvY29kZUVycik7XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBnZXRMYXRMbmcgPSBmdW5jdGlvbiBnZXRMYXRMbmcocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmVzdWx0JGdlb21ldHJ5JGxvY2EgPSByZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24sXG4gICAgICAgICAgbGF0ID0gX3Jlc3VsdCRnZW9tZXRyeSRsb2NhLmxhdCxcbiAgICAgICAgICBsbmcgPSBfcmVzdWx0JGdlb21ldHJ5JGxvY2EubG5nO1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIGxhdDogbGF0KCksXG4gICAgICAgIGxuZzogbG5nKClcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIGdldFppcENvZGUgPSBmdW5jdGlvbiBnZXRaaXBDb2RlKHJlc3VsdCwgdXNlU2hvcnROYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB6aXBDb2RlID0gbnVsbDtcbiAgICAgIHJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbG9uZ19uYW1lID0gX3JlZi5sb25nX25hbWUsXG4gICAgICAgICAgICBzaG9ydF9uYW1lID0gX3JlZi5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgdHlwZXMgPSBfcmVmLnR5cGVzO1xuICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXMoXCJwb3N0YWxfY29kZVwiKSkgemlwQ29kZSA9IHVzZVNob3J0TmFtZSA/IHNob3J0X25hbWUgOiBsb25nX25hbWU7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoemlwQ29kZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfVxuICB9KTtcbn07XG52YXIgZ2V0RGV0YWlsc0VyciA9IFwi8J+SoXVzZS1wbGFjZXMtYXV0b2NvbXBsZXRlOiBQbGVhc2UgcHJvdmlkZSBhIHBsYWNlIElkIHdoZW4gdXNpbmcgZ2V0RGV0YWlscygpIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyBwYXJ0IG9mIGFuIEF1dG9jb21wbGV0ZSBQcmVkaWN0aW9uLlwiO1xudmFyIGdldERldGFpbHMgPSBmdW5jdGlvbiBnZXREZXRhaWxzKGFyZ3MpIHtcbiAgdmFyIFBsYWNlc1NlcnZpY2UgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gIGlmICghYXJncy5wbGFjZUlkKSB7XG4gICAgY29uc29sZS5lcnJvcihnZXREZXRhaWxzRXJyKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RGV0YWlsc0Vycik7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIFBsYWNlc1NlcnZpY2UuZ2V0RGV0YWlscyhhcmdzLCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzICE9PSBcIk9LXCIpIHJlamVjdChzdGF0dXMpO1xuICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VQbGFjZXNBdXRvY29tcGxldGU7XG5leHBvcnQgeyBnZXREZXRhaWxzLCBnZXRHZW9jb2RlLCBnZXRMYXRMbmcsIGdldFppcENvZGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=