(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./Components/InformWindow/InformWindow.tsx":
/*!**************************************************!*\
  !*** ./Components/InformWindow/InformWindow.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./Components/index.tsx");
/* harmony import */ var _hooks_usePortal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePortal */ "./hooks/usePortal.tsx");
/* harmony import */ var _styles___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ */ "./styles/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./Components/InformWindow/styles.ts");


var _jsxFileName = "D:\\web\\travel_guide\\client\\Components\\InformWindow\\InformWindow.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var InformWindow = function InformWindow(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children,
      closedModal = _ref.closedModal,
      handleClick = _ref.handleClick;
  var target = Object(_hooks_usePortal__WEBPACK_IMPORTED_MODULE_7__["default"])(id);
  var cln = closedModal ? Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].wrapper, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].closedModal) : Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].wrapper, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].openModal);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cln,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles___WEBPACK_IMPORTED_MODULE_8__["default"].flex),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].icon),
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInfo"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].text),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].bottom),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
        handleClick: handleClick,
        nameBtn: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        isSubmitting: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this), target);
};

_s(InformWindow, "d22EksAnz8DgyiXjXDgs5mCDlFQ=", false, function () {
  return [_hooks_usePortal__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = InformWindow;
/* harmony default export */ __webpack_exports__["default"] = (InformWindow);

var _c;

$RefreshReg$(_c, "InformWindow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/InformWindow/styles.ts":
/*!*******************************************!*\
  !*** ./Components/InformWindow/styles.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variabels/colors */ "./variabels/colors.ts");


var translateKeyframes = {
  '0%': {
    transform: 'translateX(110%)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
};
var opacityKeyframes = {
  'from': {
    opacity: 0
  },
  'to': {
    opacity: 1
  }
};
var opacityKeyframesClosed = {
  'from': {
    opacity: 1
  },
  'to': {
    opacity: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 40,
    width: 300,
    boxShadow: "2px 2px 8px 2px ".concat(_variabels_colors__WEBPACK_IMPORTED_MODULE_1__["shadows"].shadowDark),
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./hooks/usePortal.tsx":
/*!*****************************!*\
  !*** ./hooks/usePortal.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function createRootElement(id) {
  var rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

function usePortal(id) {
  _s();

  var rootElemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function setupElement() {
    var existingParent = document.querySelector("#".concat(id));
    var parentElem = existingParent || createRootElement(id);

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

_s(usePortal, "aHdAbTDrTa5a3NQL1rgGPfFVhlo=");

/* harmony default export */ __webpack_exports__["default"] = (usePortal);

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9JbmZvcm1XaW5kb3cvSW5mb3JtV2luZG93LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9JbmZvcm1XaW5kb3cvc3R5bGVzLnRzIiwid2VicGFjazovL19OX0UvLi9ob29rcy91c2VQb3J0YWwudHN4Il0sIm5hbWVzIjpbIkluZm9ybVdpbmRvdyIsImlkIiwiY2hpbGRyZW4iLCJjbG9zZWRNb2RhbCIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwidXNlUG9ydGFsIiwiY2xuIiwiY3NzIiwic3R5bGVzIiwid3JhcHBlciIsIm9wZW5Nb2RhbCIsImNyZWF0ZVBvcnRhbCIsImJhc2VTdHlsZXMiLCJmbGV4IiwiaWNvbiIsImZhSW5mbyIsInRleHQiLCJib3R0b20iLCJ0cmFuc2xhdGVLZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5S2V5ZnJhbWVzIiwib3BhY2l0eSIsIm9wYWNpdHlLZXlmcmFtZXNDbG9zZWQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInNoYWRvd0RhcmsiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiY3JlYXRlUm9vdEVsZW1lbnQiLCJyb290Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYWRkUm9vdEVsZW1lbnQiLCJyb290RWxlbSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicm9vdEVsZW1SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzZXR1cEVsZW1lbnQiLCJleGlzdGluZ1BhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50IiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJnZXRSb290RWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE2RTtBQUFBOztBQUFBLE1BQTFFQyxFQUEwRSxRQUExRUEsRUFBMEU7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBNURDLFdBQTRELFFBQTVEQSxXQUE0RDtBQUFBLE1BQS9DQyxXQUErQyxRQUEvQ0EsV0FBK0M7QUFDaEcsTUFBTUMsTUFBTSxHQUFHQyxnRUFBUyxDQUFDTCxFQUFELENBQXhCO0FBQ0EsTUFBTU0sR0FBRyxHQUFHSixXQUFXLEdBQUdLLGtFQUFHLENBQUNDLCtDQUFNLENBQUNDLE9BQVIsRUFBaUJELCtDQUFNLENBQUNOLFdBQXhCLENBQU4sR0FBNkNLLGtFQUFHLENBQUNDLCtDQUFNLENBQUNDLE9BQVIsRUFBaUJELCtDQUFNLENBQUNFLFNBQXhCLENBQXZFO0FBRUEsc0JBQU9DLDhEQUFZLGVBQ2pCO0FBQUssYUFBUyxFQUFHTCxHQUFqQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFHQyxrRUFBRyxDQUFDSyxnREFBVSxDQUFDQyxJQUFaLENBQXBCO0FBQUEsOEJBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsaUJBQVMsRUFBR04sa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ00sSUFBUixDQUFoQztBQUFnRCxZQUFJLEVBQUdDLHdFQUFNQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUdSLGtFQUFHLENBQUNDLCtDQUFNLENBQUNRLElBQVIsQ0FBbEI7QUFBQSxrQkFDSWY7QUFESjtBQUFBO0FB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QVQsQ0FBbUJMLEVBQW5CLEVBQStCO0FBQUE7O0FBQzdCLE1BQU1vRCxXQUFXLEdBQUdDLG9EQUFNLENBQXFCLElBQXJCLENBQTFCO0FBQ0FDLHlEQUFTLENBQUMsU0FBU0MsWUFBVCxHQUF3QjtBQUNoQyxRQUFNQyxjQUFjLEdBQUdiLFFBQVEsQ0FBQ2MsYUFBVCxZQUEyQnpELEVBQTNCLEVBQXZCO0FBQ0EsUUFBTTBELFVBQVUsR0FBR0YsY0FBYyxJQUFJZixpQkFBaUIsQ0FBQ3pDLEVBQUQsQ0FBdEQ7O0FBQ0EsUUFBSSxDQUFDd0QsY0FBTCxFQUFxQjtBQUNuQlYsb0JBQWMsQ0FBQ1ksVUFBRCxDQUFkO0FBQ0Q7O0FBQ0RBLGNBQVUsQ0FBQ0MsV0FBWCxDQUF1QlAsV0FBVyxDQUFDUSxPQUFuQztBQUNBLFdBQU8sU0FBU0MsYUFBVCxHQUF5QjtBQUM5QlQsaUJBQVcsQ0FBQ1EsT0FBWixDQUFvQkUsTUFBcEI7O0FBQ0EsVUFBSUosVUFBVSxDQUFDSyxVQUFYLENBQXNCQyxNQUF0QixLQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDTixrQkFBVSxDQUFDSSxNQUFYO0FBQ0Q7QUFDRixLQUxEO0FBTUQsR0FiUSxFQWFOLENBQUM5RCxFQUFELENBYk0sQ0FBVDs7QUFjQSxXQUFTaUUsV0FBVCxHQUF1QjtBQUNyQixRQUFJLENBQUNiLFdBQVcsQ0FBQ1EsT0FBakIsRUFBMEI7QUFDeEJSLGlCQUFXLENBQUNRLE9BQVosR0FBc0JqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDRDs7QUFDRCxXQUFPUSxXQUFXLENBQUNRLE9BQW5CO0FBQ0Q7O0FBQ0QsU0FBT0ssV0FBVyxFQUFsQjtBQUNEOztHQXZCUTVELFM7O0FBeUJNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIlxyXG5pbXBvcnQgeyBmYUluZm8gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHVzZVBvcnRhbCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlUG9ydGFsXCJcclxuaW1wb3J0IGJhc2VTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzLydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIlxyXG5cclxudHlwZSBJbmZvcm1XaW5kb3dQcm9wcyA9IHtcclxuICBpZDogc3RyaW5nXHJcbiAgY2hpbGRyZW46IHN0cmluZ1xyXG4gIGNsb3NlZE1vZGFsOiBudWxsIHwgYm9vbGVhblxyXG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEluZm9ybVdpbmRvdyA9ICh7IGlkLCBjaGlsZHJlbiwgY2xvc2VkTW9kYWwsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5GQzxJbmZvcm1XaW5kb3dQcm9wcz4gPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IHVzZVBvcnRhbChpZClcclxuICBjb25zdCBjbG4gPSBjbG9zZWRNb2RhbCA/IGNzcyhzdHlsZXMud3JhcHBlciwgc3R5bGVzLmNsb3NlZE1vZGFsKSA6IGNzcyhzdHlsZXMud3JhcHBlciwgc3R5bGVzLm9wZW5Nb2RhbClcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xuIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY3NzKGJhc2VTdHlsZXMuZmxleCkgfT5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuaWNvbikgfSBpY29uPXsgZmFJbmZvIH0vPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMudGV4dCkgfT5cclxuICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5ib3R0b20pIH0gPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eyBoYW5kbGVDbGljayB9IG5hbWVCdG49J9CX0LDQutGA0LjRgtC4JyBpc1N1Ym1pdHRpbmc9eyBmYWxzZSB9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+LFxyXG4gICAgdGFyZ2V0LFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtV2luZG93IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnXHJcblxyXG5pbXBvcnQgeyBzaGFkb3dzIH0gZnJvbSAnLi4vLi4vdmFyaWFiZWxzL2NvbG9ycydcclxuXHJcbmNvbnN0IHRyYW5zbGF0ZUtleWZyYW1lcyA9IHtcclxuICAnMCUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyxcclxuICB9LFxyXG5cclxuICAnMTAwJSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBvcGFjaXR5S2V5ZnJhbWVzID0ge1xyXG4gICdmcm9tJzoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICB9LFxyXG5cclxuICAndG8nOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH1cclxufTtcclxuY29uc3Qgb3BhY2l0eUtleWZyYW1lc0Nsb3NlZCA9IHtcclxuICAnZnJvbSc6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfSxcclxuXHJcbiAgJ3RvJzoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDEwMCxcclxuICAgIHJpZ2h0OiA0MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBib3hTaGFkb3c6IGAycHggMnB4IDhweCAycHggJHsgc2hhZG93cy5zaGFkb3dEYXJrIH1gLFxyXG4gICAgcGFkZGluZzogJzE1cHggMjBweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzUwNTA1MCdcclxuICB9LFxyXG4gIG9wZW5Nb2RhbDoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW3RyYW5zbGF0ZUtleWZyYW1lcywgb3BhY2l0eUtleWZyYW1lc10sXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzLCA4MDBtcycsXHJcbiAgfSxcclxuICBjbG9zZWRNb2RhbDoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW29wYWNpdHlLZXlmcmFtZXNDbG9zZWRdLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcxMTAwbXMnLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgY29sb3I6ICcjZmZmJ1xyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgaGVpZ2h0OiAzNixcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDIwXHJcbiAgfSxcclxuICBib3R0b206IHtcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgdGV4dEFsaWduOiAnZW5kJ1xyXG4gIH1cclxufSkiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm9vdEVsZW1lbnQoaWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHJvb3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICByb290Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcclxuICByZXR1cm4gcm9vdENvbnRhaW5lclxyXG59XHJcbmZ1bmN0aW9uIGFkZFJvb3RFbGVtZW50KHJvb3RFbGVtOiBFbGVtZW50KSB7XHJcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoXHJcbiAgICByb290RWxlbSxcclxuICAgIGRvY3VtZW50LmJvZHkubGFzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcsXHJcbiAgKVxyXG59XHJcbmZ1bmN0aW9uIHVzZVBvcnRhbChpZDogc3RyaW5nKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1SZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKVxyXG4gIHVzZUVmZmVjdChmdW5jdGlvbiBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApXHJcbiAgICBjb25zdCBwYXJlbnRFbGVtID0gZXhpc3RpbmdQYXJlbnQgfHwgY3JlYXRlUm9vdEVsZW1lbnQoaWQpXHJcbiAgICBpZiAoIWV4aXN0aW5nUGFyZW50KSB7XHJcbiAgICAgIGFkZFJvb3RFbGVtZW50KHBhcmVudEVsZW0pXHJcbiAgICB9XHJcbiAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKHJvb3RFbGVtUmVmLmN1cnJlbnQpXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCgpIHtcclxuICAgICAgcm9vdEVsZW1SZWYuY3VycmVudC5yZW1vdmUoKVxyXG4gICAgICBpZiAocGFyZW50RWxlbS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gLTEpIHtcclxuICAgICAgICBwYXJlbnRFbGVtLnJlbW92ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaWRdKVxyXG4gIGZ1bmN0aW9uIGdldFJvb3RFbGVtKCkge1xyXG4gICAgaWYgKCFyb290RWxlbVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJvb3RFbGVtUmVmLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RFbGVtUmVmLmN1cnJlbnRcclxuICB9XHJcbiAgcmV0dXJuIGdldFJvb3RFbGVtKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUG9ydGFsIl0sInNvdXJjZVJvb3QiOiIifQ==