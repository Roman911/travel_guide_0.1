(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./modules/Comments/Components/Comment.tsx":
/*!*************************************************!*\
  !*** ./modules/Comments/Components/Comment.tsx ***!
  \*************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./modules/Comments/Components/styles.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");
/* harmony import */ var _Containers_CreateComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/CreateComment */ "./modules/Comments/Containers/CreateComment.tsx");
/* harmony import */ var _CommentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentText */ "./modules/Comments/Components/CommentText.tsx");
/* harmony import */ var _Containers_ShowComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/ShowComment */ "./modules/Comments/Containers/ShowComment.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Components\\Comment.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Comment = function Comment(_ref) {
  _s();

  var name = _ref.name,
      date = _ref.date,
      text = _ref.text,
      idComment = _ref.idComment,
      comments = _ref.comments,
      postId = _ref.postId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showCreateComment = _useState[0],
      setShowCreateComment = _useState[1];

  var comment = comments.length !== 0 && comments.map(function (item, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ShowComment__WEBPACK_IMPORTED_MODULE_8__["ShowComment"], {
      text: item.text,
      _id: item.idAuthor,
      idComment: idComment,
      comments: [],
      date: item.createdAt,
      postId: postId
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, _this);
  });

  var handleClick = function handleClick() {
    setShowCreateComment(!showCreateComment);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].blockUser),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].flexSB),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["NameUser"], {
        name: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["Date"], {
        date: date,
        format: 'LL'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentText__WEBPACK_IMPORTED_MODULE_7__["CommentText"], {
      text: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
      handleClick: handleClick,
      nameBtn: "\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this), showCreateComment && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_CreateComment__WEBPACK_IMPORTED_MODULE_6__["CreateComment"], {
      idComment: idComment,
      isFirstComment: false,
      handleClick: handleClick,
      postId: postId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 28
    }, _this), comment]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, _this);
};

_s(Comment, "eN6AEkzk+KVlTsq+6VP2CBiyGhU=");

_c = Comment;

var _c;

$RefreshReg$(_c, "Comment");

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

/***/ "./modules/Comments/Components/CommentText.tsx":
/*!*****************************************************!*\
  !*** ./modules/Comments/Components/CommentText.tsx ***!
  \*****************************************************/
/*! exports provided: CommentText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentText", function() { return CommentText; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./modules/Comments/Components/styles.ts");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Components\\CommentText.tsx",
    _this = undefined;




var CommentText = function CommentText(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].blockText),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].text),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, _this);
};
_c = CommentText;

var _c;

$RefreshReg$(_c, "CommentText");

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

/***/ "./modules/Comments/Components/styles.ts":
/*!***********************************************!*\
  !*** ./modules/Comments/Components/styles.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variabels/colors */ "./variabels/colors.ts");


/* harmony default export */ __webpack_exports__["default"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    border: "2px solid ".concat(_variabels_colors__WEBPACK_IMPORTED_MODULE_1__["borders"].border),
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  block: {
    width: '100%'
  },
  iconNoAvatar: {
    height: 40,
    width: 'auto !important',
    color: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["icons"],
    opacity: 0.7,
    padding: '0 5px'
  },
  link: {
    color: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["btn"],
    fontWeight: 600,
    marginTop: 6
  },
  blockUser: {
    width: '100%',
    paddingLeft: 10
  },
  blockText: {
    padding: 10,
    background: '#f7f7f7',
    borderRadius: 6
  },
  text: {
    fontSize: '1rem'
  },
  btn: {
    fontSize: '0.65rem',
    color: 'rgba(0,0,0,.5)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 800,
    marginBottom: 8,
    ':hover': {
      color: 'red'
    }
  },
  submit: {
    marginBottom: 25
  },
  submitPosition: {
    justifyContent: 'flex-end'
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

/***/ "./modules/Comments/Containers/Comments.tsx":
/*!**************************************************!*\
  !*** ./modules/Comments/Containers/Comments.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _querys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./querys */ "./modules/Comments/Containers/querys.ts");
/* harmony import */ var _CreateComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateComment */ "./modules/Comments/Containers/CreateComment.tsx");
/* harmony import */ var _ShowAllComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShowAllComments */ "./modules/Comments/Containers/ShowAllComments.tsx");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");



var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Containers\\Comments.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Comments = function Comments(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_querys__WEBPACK_IMPORTED_MODULE_3__["commentsQuery"], {
    variables: {
      postId: id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_6__["Loading"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 23
  }, _this);
  if (error) return "Error! ".concat(error);
  var comments = data.comments;
  var commentsReverse = comments.reverse();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\u041A\u041E\u041C\u0415\u041D\u0422\u0410\u0420\u0406"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CreateComment__WEBPACK_IMPORTED_MODULE_4__["CreateComment"], {
      postId: id,
      isFirstComment: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ShowAllComments__WEBPACK_IMPORTED_MODULE_5__["ShowAllComments"], {
      comments: commentsReverse,
      postId: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(Comments, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

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

/***/ "./modules/Comments/Containers/CreateComment.tsx":
/*!*******************************************************!*\
  !*** ./modules/Comments/Containers/CreateComment.tsx ***!
  \*******************************************************/
/*! exports provided: CreateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComment", function() { return CreateComment; });
/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");
/* harmony import */ var _styles_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/login */ "./styles/login.ts");
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/styles */ "./modules/Comments/Components/styles.ts");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mutations */ "./modules/Comments/Containers/mutations.ts");
/* harmony import */ var _querys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./querys */ "./modules/Comments/Containers/querys.ts");




var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Containers\\CreateComment.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var CreateComment = function CreateComment(_ref) {
  _s();

  var postId = _ref.postId,
      idComment = _ref.idComment,
      isFirstComment = _ref.isFirstComment,
      handleClick = _ref.handleClick;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      data = _useSelector.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(_mutations__WEBPACK_IMPORTED_MODULE_14__["CreateCommentMutation"]),
      _useMutation2 = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      createComment = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(_mutations__WEBPACK_IMPORTED_MODULE_14__["AddCommentMutation"]),
      _useMutation4 = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      addComment = _useMutation4[0];

  var initialValues = {
    text: ''
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]({
    text: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().min(3, 'Короткий коментар').required('Required')
  });

  var onSubmit = function onSubmit(values, _ref2) {
    var resetForm = _ref2.resetForm;
    var ref = [{
      query: _querys__WEBPACK_IMPORTED_MODULE_15__["commentsQuery"],
      variables: {
        postId: postId
      }
    }];
    var query = {
      variables: {
        idAuthor: data.userId,
        _id: idComment,
        postId: postId,
        text: values.text
      },
      refetchQueries: ref
    };

    if (isFirstComment) {
      createComment(query).then(function (data) {
        if (data) {
          resetForm();
        }
      });
    } else {
      addComment(query).then(function (data) {
        if (data) {
          handleClick && handleClick();
          resetForm();
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    children: function children(formik) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].wrapper),
          children: data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
              avatar: data.avatar,
              name: data.name,
              size: "S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].block),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_11__["FormikControl"], {
                control: "textarea",
                name: "text",
                label: "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].iconNoAvatar),
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faOptinMonster"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].block),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["\u041F\u0440\u0438\u0432\u0456\u0442! \u0429\u043E\u0431 \u043A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438, \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/login",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].link),
                    children: "\u0443\u0432\u0456\u0439\u0442\u0438"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 74
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 52
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_7__["css"])(_styles_login__WEBPACK_IMPORTED_MODULE_12__["default"].inputSub, _Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].submit, isFirstComment ? _Components_styles__WEBPACK_IMPORTED_MODULE_13__["default"].submitPosition : null),
          children: [isFirstComment || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_11__["ButtonLink"], {
            nameBtn: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
            handleClick: handleClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 31
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            type: "submit",
            nameBtn: "\u041A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438",
            isSubmitting: !data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 14
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 10
  }, _this);
};

_s(CreateComment, "mSZyjHZxnwPfI2/xyFArnFSc2QU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"]];
});

_c = CreateComment;

var _c;

$RefreshReg$(_c, "CreateComment");

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

/***/ "./modules/Comments/Containers/ShowAllComments.tsx":
/*!*********************************************************!*\
  !*** ./modules/Comments/Containers/ShowAllComments.tsx ***!
  \*********************************************************/
/*! exports provided: ShowAllComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllComments", function() { return ShowAllComments; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShowComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowComment */ "./modules/Comments/Containers/ShowComment.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Containers\\ShowAllComments.tsx",
    _this = undefined;



var ShowAllComments = function ShowAllComments(_ref) {
  var comments = _ref.comments,
      postId = _ref.postId;
  var comment = comments.map(function (item, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ShowComment__WEBPACK_IMPORTED_MODULE_2__["ShowComment"], {
      _id: item.idAuthor,
      date: item.createdAt,
      text: item.text,
      idComment: item._id,
      comments: item.comments,
      postId: postId
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: comments.length !== 0 ? comment : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432 \u043F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 41
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, _this);
};
_c = ShowAllComments;

var _c;

$RefreshReg$(_c, "ShowAllComments");

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

/***/ "./modules/Comments/Containers/ShowComment.tsx":
/*!*****************************************************!*\
  !*** ./modules/Comments/Containers/ShowComment.tsx ***!
  \*****************************************************/
/*! exports provided: ShowComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComment", function() { return ShowComment; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles */ "./styles/index.ts");
/* harmony import */ var _querys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./querys */ "./modules/Comments/Containers/querys.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");
/* harmony import */ var _Components_Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Comment */ "./modules/Comments/Components/Comment.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Comments\\Containers\\ShowComment.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var ShowComment = function ShowComment(_ref) {
  _s();

  var _id = _ref._id,
      date = _ref.date,
      text = _ref.text,
      idComment = _ref.idComment,
      comments = _ref.comments,
      postId = _ref.postId;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_querys__WEBPACK_IMPORTED_MODULE_5__["authorQuery"], {
    variables: {
      _id: _id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_6__["Loading"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, _this);
  if (error) return "Error! ".concat(error);
  var author = data.author;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].flexVFS),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
      avatar: author.avatar,
      name: author.name,
      size: "S"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Comment__WEBPACK_IMPORTED_MODULE_7__["Comment"], {
      name: author.name,
      date: date,
      text: text,
      idComment: idComment,
      comments: comments,
      postId: postId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, _this);
};

_s(ShowComment, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = ShowComment;

var _c;

$RefreshReg$(_c, "ShowComment");

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

/***/ "./modules/Comments/Containers/mutations.ts":
/*!**************************************************!*\
  !*** ./modules/Comments/Containers/mutations.ts ***!
  \**************************************************/
/*! exports provided: CreateCommentMutation, AddCommentMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCommentMutation", function() { return CreateCommentMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentMutation", function() { return AddCommentMutation; });
/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject2() {
  var data = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation addComment($_id: ID!, $idAuthor: ID!, $text: String!) {\n    addComment(_id: $_id, idAuthor: $idAuthor, text: $text) {\n      comments {\n        idAuthor\n        text\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation createComment($postId: ID!, $idAuthor: ID!, $text: String!) {\n    createComment(postId: $postId, idAuthor: $idAuthor, text: $text) {\n      _id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CreateCommentMutation = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var AddCommentMutation = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());

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

/***/ "./modules/Comments/Containers/querys.ts":
/*!***********************************************!*\
  !*** ./modules/Comments/Containers/querys.ts ***!
  \***********************************************/
/*! exports provided: commentsQuery, authorQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsQuery", function() { return commentsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorQuery", function() { return authorQuery; });
/* harmony import */ var D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject2() {
  var data = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query author($_id: ID!) {\n    author(_id: $_id) {\n      avatar\n      name\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_web_travel_guide_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query comments($postId: ID!) {\n    comments(postId: $postId) {\n      _id\n      idAuthor\n      text\n      createdAt\n      comments {\n        idAuthor\n        text\n        createdAt\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var commentsQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var authorQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9Db21tZW50cy9Db21wb25lbnRzL0NvbW1lbnQudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbXBvbmVudHMvQ29tbWVudFRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbXBvbmVudHMvc3R5bGVzLnRzIiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbnRhaW5lcnMvQ29tbWVudHMudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbnRhaW5lcnMvQ3JlYXRlQ29tbWVudC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvQ29tbWVudHMvQ29udGFpbmVycy9TaG93QWxsQ29tbWVudHMudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbnRhaW5lcnMvU2hvd0NvbW1lbnQudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbnRhaW5lcnMvbXV0YXRpb25zLnRzIiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0NvbW1lbnRzL0NvbnRhaW5lcnMvcXVlcnlzLnRzIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJuYW1lIiwiZGF0ZSIsInRleHQiLCJpZENvbW1lbnQiLCJjb21tZW50cyIsInBvc3RJZCIsInVzZVN0YXRlIiwic2hvd0NyZWF0ZUNvbW1lbnQiLCJzZXRTaG93Q3JlYXRlQ29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZEF1dGhvciIsImNyZWF0ZWRBdCIsImhhbmRsZUNsaWNrIiwiY3NzIiwic3R5bGVzIiwiYmxvY2tVc2VyIiwiYmFzZVN0eWxlIiwiZmxleFNCIiwiQ29tbWVudFRleHQiLCJibG9ja1RleHQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwid3JhcHBlciIsImJvcmRlciIsImJvcmRlcnMiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJibG9jayIsIndpZHRoIiwiaWNvbk5vQXZhdGFyIiwiaGVpZ2h0IiwiY29sb3IiLCJpY29ucyIsIm9wYWNpdHkiLCJsaW5rIiwiYnRuIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsInN1Ym1pdCIsInN1Ym1pdFBvc2l0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJDb21tZW50cyIsImlkIiwidXNlUXVlcnkiLCJjb21tZW50c1F1ZXJ5IiwidmFyaWFibGVzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbW1lbnRzUmV2ZXJzZSIsInJldmVyc2UiLCJDcmVhdGVDb21tZW50IiwiaXNGaXJzdENvbW1lbnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZU11dGF0aW9uIiwiQ3JlYXRlQ29tbWVudE11dGF0aW9uIiwiY3JlYXRlQ29tbWVudCIsIkFkZENvbW1lbnRNdXRhdGlvbiIsImFkZENvbW1lbnQiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsIm1pbiIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJyZWYiLCJxdWVyeSIsInVzZXJJZCIsIl9pZCIsInJlZmV0Y2hRdWVyaWVzIiwidGhlbiIsImZvcm1payIsImF2YXRhciIsImZhT3B0aW5Nb25zdGVyIiwibG9naW5TdHlsZXMiLCJpbnB1dFN1YiIsIlNob3dBbGxDb21tZW50cyIsIlNob3dDb21tZW50IiwiYXV0aG9yUXVlcnkiLCJhdXRob3IiLCJmbGV4VkZTIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV08sSUFB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L2NodW5rcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJhcGhyb2RpdGUvbm8taW1wb3J0YW50XCJcclxuaW1wb3J0IGJhc2VTdHlsZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIlxyXG5pbXBvcnQgeyBCdXR0b25MaW5rLCBEYXRlLCBOYW1lVXNlciB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzXCJcclxuaW1wb3J0IHsgQ3JlYXRlQ29tbWVudCB9IGZyb20gXCIuLi9Db250YWluZXJzL0NyZWF0ZUNvbW1lbnRcIlxyXG5pbXBvcnQgeyBDb21tZW50VGV4dCB9IGZyb20gXCIuL0NvbW1lbnRUZXh0XCJcclxuaW1wb3J0IHsgU2hvd0NvbW1lbnQgfSBmcm9tIFwiLi4vQ29udGFpbmVycy9TaG93Q29tbWVudFwiXHJcblxyXG50eXBlIE15Q29tbWVudFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGRhdGU6IHN0cmluZ1xyXG4gIHRleHQ6IHN0cmluZ1xyXG4gIGlkQ29tbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgY29tbWVudHM6IGFueVtdXHJcbiAgcG9zdElkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQ6IFJlYWN0LkZDPE15Q29tbWVudFByb3BzPiA9ICh7IG5hbWUsIGRhdGUsIHRleHQsIGlkQ29tbWVudCwgY29tbWVudHMsIHBvc3RJZCB9KSA9PiB7XHJcbiAgY29uc3QgWyBzaG93Q3JlYXRlQ29tbWVudCwgc2V0U2hvd0NyZWF0ZUNvbW1lbnQgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5sZW5ndGggIT09IDAgJiYgY29tbWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIDxTaG93Q29tbWVudCBrZXk9eyBpbmRleCB9IHRleHQ9eyBpdGVtLnRleHQgfSBfaWQ9eyBpdGVtLmlkQXV0aG9yIH0gaWRDb21tZW50PXsgaWRDb21tZW50IH0gY29tbWVudHM9eyBbXSB9ICBkYXRlPXsgaXRlbS5jcmVhdGVkQXQgfSBwb3N0SWQ9eyBwb3N0SWQgfSAvPlxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93Q3JlYXRlQ29tbWVudCghc2hvd0NyZWF0ZUNvbW1lbnQpXHJcbiAgfVxyXG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJsb2NrVXNlcikgfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY3NzKGJhc2VTdHlsZS5mbGV4U0IpIH0+XHJcbiAgICAgIDxOYW1lVXNlciBuYW1lPXsgbmFtZSB9IC8+XHJcbiAgICAgIDxEYXRlIGRhdGU9eyBkYXRlIH0gZm9ybWF0PXsgJ0xMJyB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxDb21tZW50VGV4dCB0ZXh0PXsgdGV4dCB9IC8+XHJcbiAgICA8QnV0dG9uTGluayBoYW5kbGVDbGljaz17IGhhbmRsZUNsaWNrIH0gbmFtZUJ0bj0n0LLRltC00L/QvtCy0ZbRgdGC0LgnIC8+XHJcbiAgICB7IHNob3dDcmVhdGVDb21tZW50ICYmIDxDcmVhdGVDb21tZW50IGlkQ29tbWVudD17IGlkQ29tbWVudCB9IGlzRmlyc3RDb21tZW50PXsgZmFsc2UgfSBoYW5kbGVDbGljaz17IGhhbmRsZUNsaWNrIH0gcG9zdElkPXsgcG9zdElkIH0gLz4gfVxyXG4gICAgeyBjb21tZW50IH1cclxuICA8L3NlY3Rpb24+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZS9uby1pbXBvcnRhbnRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiXHJcblxyXG50eXBlIE15Q29tbWVudFRleHRQcm9wcyA9IHtcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRUZXh0OiBSZWFjdC5GQzxNeUNvbW1lbnRUZXh0UHJvcHM+ID0gKHsgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5ibG9ja1RleHQpIH0+XHJcbiAgICA8cCBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLnRleHQpIH0+eyB0ZXh0IH08L3A+XHJcbiAgPC9kaXY+XHJcbn0iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCdcclxuXHJcbmltcG9ydCB7IGJvcmRlcnMsIGljb25zLCBidG4gfSBmcm9tIFwiLi4vLi4vLi4vdmFyaWFiZWxzL2NvbG9yc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7IGJvcmRlcnMuYm9yZGVyIH1gLFxyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IDIwXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgd2lkdGg6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgaWNvbk5vQXZhdGFyOiB7XHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgd2lkdGg6ICdhdXRvICFpbXBvcnRhbnQnLFxyXG4gICAgY29sb3I6IGljb25zLFxyXG4gICAgb3BhY2l0eTogMC43LFxyXG4gICAgcGFkZGluZzogJzAgNXB4J1xyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgY29sb3I6IGJ0bixcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIG1hcmdpblRvcDogNlxyXG4gIH0sXHJcbiAgYmxvY2tVc2VyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDEwXHJcbiAgfSxcclxuICBibG9ja1RleHQ6IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgYmFja2dyb3VuZDogJyNmN2Y3ZjcnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiA2XHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBmb250U2l6ZTogJzFyZW0nXHJcbiAgfSxcclxuICBidG46IHtcclxuICAgIGZvbnRTaXplOiAnMC42NXJlbScsXHJcbiAgICBjb2xvcjogJ3JnYmEoMCwwLDAsLjUpJyxcclxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDgsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogJ3JlZCdcclxuICAgIH1cclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiAyNVxyXG4gIH0sXHJcbiAgc3VibWl0UG9zaXRpb246IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXHJcbiAgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcbmltcG9ydCB7IGNvbW1lbnRzUXVlcnkgfSBmcm9tIFwiLi9xdWVyeXNcIlxyXG5pbXBvcnQgeyBDcmVhdGVDb21tZW50IH0gZnJvbSBcIi4vQ3JlYXRlQ29tbWVudFwiXHJcbmltcG9ydCB7IFNob3dBbGxDb21tZW50cyB9IGZyb20gXCIuL1Nob3dBbGxDb21tZW50c1wiXHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50c1wiXHJcblxyXG50eXBlIENvbW1lbnRzUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDb21tZW50czogUmVhY3QuRkM8Q29tbWVudHNQcm9wcz4gPSAoeyBpZCB9KTogYW55ID0+IHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeSggY29tbWVudHNRdWVyeSwge1xyXG4gICAgdmFyaWFibGVzOiB7IHBvc3RJZDogaWQgfVxyXG4gIH0pXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gXHJcbiAgY29uc3QgeyBjb21tZW50cyB9ID0gZGF0YVxyXG4gIGNvbnN0IGNvbW1lbnRzUmV2ZXJzZSA9IGNvbW1lbnRzLnJldmVyc2UoKVxyXG4gIHJldHVybiA8PlxyXG4gICAgPGgzPtCa0J7QnNCV0J3QotCQ0KDQhjwvaDM+XHJcbiAgICA8Q3JlYXRlQ29tbWVudCBwb3N0SWQ9eyBpZCB9IGlzRmlyc3RDb21tZW50PXsgdHJ1ZSB9IC8+XHJcbiAgICA8U2hvd0FsbENvbW1lbnRzIGNvbW1lbnRzPXsgY29tbWVudHNSZXZlcnNlIH0gcG9zdElkPXsgaWQgfSAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZS9uby1pbXBvcnRhbnRcIlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCJcclxuaW1wb3J0IHsgZmFPcHRpbk1vbnN0ZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBCdXR0b25MaW5rLCBGb3JtaWtDb250cm9sIH0gZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHNcIlxyXG5pbXBvcnQgbG9naW5TdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2xvZ2luJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudHMvc3R5bGVzJ1xyXG5pbXBvcnQgeyBDcmVhdGVDb21tZW50TXV0YXRpb24sIEFkZENvbW1lbnRNdXRhdGlvbiB9IGZyb20gJy4vbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBjb21tZW50c1F1ZXJ5IH0gZnJvbSBcIi4vcXVlcnlzXCJcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy91c2VyXCJcclxudHlwZSBDcmVhdGVDb21tZW50UHJvcHMgPSB7XHJcbiAgcG9zdElkOiBzdHJpbmdcclxuICBpZENvbW1lbnQ/OiBzdHJpbmdcclxuICBpc0ZpcnN0Q29tbWVudDogYm9vbGVhblxyXG4gIGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQ29tbWVudDogUmVhY3QuRkM8Q3JlYXRlQ29tbWVudFByb3BzPiA9ICh7IHBvc3RJZCwgaWRDb21tZW50LCBpc0ZpcnN0Q29tbWVudCwgaGFuZGxlQ2xpY2sgfSk6IGFueSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdXNlcjogVXNlciB9KSA9PiBzdGF0ZS51c2VyKVxyXG4gIGNvbnN0IFsgY3JlYXRlQ29tbWVudCBdID0gdXNlTXV0YXRpb24oQ3JlYXRlQ29tbWVudE11dGF0aW9uKVxyXG4gIGNvbnN0IFsgYWRkQ29tbWVudCBdID0gdXNlTXV0YXRpb24oQWRkQ29tbWVudE11dGF0aW9uKVxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7IHRleHQ6ICcnIH1cclxuICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgICB0ZXh0OiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1pbigzLCAn0JrQvtGA0L7RgtC60LjQuSDQutC+0LzQtdC90YLQsNGAJylcclxuICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbiAgfSlcclxuICBjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXMsIHsgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IFt7XHJcbiAgICAgIHF1ZXJ5OiBjb21tZW50c1F1ZXJ5LFxyXG4gICAgICB2YXJpYWJsZXM6IHsgcG9zdElkOiBwb3N0SWQgfVxyXG4gICAgfV1cclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZEF1dGhvcjogZGF0YS51c2VySWQsXHJcbiAgICAgICAgX2lkOiBpZENvbW1lbnQsXHJcbiAgICAgICAgcG9zdElkOiBwb3N0SWQsXHJcbiAgICAgICAgdGV4dDogdmFsdWVzLnRleHRcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IHJlZlxyXG4gICAgfVxyXG4gICAgaWYgKGlzRmlyc3RDb21tZW50KSB7XHJcbiAgICAgIGNyZWF0ZUNvbW1lbnQocXVlcnkpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkQ29tbWVudChxdWVyeSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgaGFuZGxlQ2xpY2sgJiYgaGFuZGxlQ2xpY2soKVxyXG4gICAgICAgICAgcmVzZXRGb3JtKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9eyBpbml0aWFsVmFsdWVzIH0gb25TdWJtaXQ9eyBvblN1Ym1pdCB9IHZhbGlkYXRpb25TY2hlbWE9eyB2YWxpZGF0aW9uU2NoZW1hIH0gPlxyXG4gICAge2Zvcm1payA9PiB7XHJcbiAgICAgIHJldHVybiA8Rm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMud3JhcHBlcikgfT5cclxuICAgICAgICAgIHtkYXRhID8gPD5cclxuICAgICAgICAgICAgPEF2YXRhciBhdmF0YXI9eyBkYXRhLmF2YXRhciB9IG5hbWU9eyBkYXRhLm5hbWUgfSBzaXplPSdTJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuYmxvY2spIH0+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa0NvbnRyb2wgY29udHJvbD0ndGV4dGFyZWEnIG5hbWU9J3RleHQnIGxhYmVsPSfQktCw0Ygg0LrQvtC80LXQvdGC0LDRgC4uLicgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz4gOjw+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5pY29uTm9BdmF0YXIpIH0gaWNvbj17IGZhT3B0aW5Nb25zdGVyIH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJsb2NrKSB9PlxyXG4gICAgICAgICAgICAgIDxwPtCf0YDQuNCy0ZbRgiEg0KnQvtCxINC60L7QvNC10L3RgtGD0LLQsNGC0LgsINC/0L7RgtGA0ZbQsdC90L4gPExpbmsgaHJlZj17XCIvbG9naW5cIn0+PGEgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5saW5rKSB9PtGD0LLRltC50YLQuDwvYT48L0xpbms+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhsb2dpblN0eWxlcy5pbnB1dFN1Yiwgc3R5bGVzLnN1Ym1pdCwgaXNGaXJzdENvbW1lbnQgPyBzdHlsZXMuc3VibWl0UG9zaXRpb24gOiBudWxsKSB9PlxyXG4gICAgICAgICAgeyBpc0ZpcnN0Q29tbWVudCB8fCA8QnV0dG9uTGluayBuYW1lQnRuPSfQodC60LDRgdGD0LLQsNGC0LgnIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfSAvPiB9XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuYW1lQnRuPSfQmtC+0LzQtdC90YLRg9Cy0LDRgtC4JyBpc1N1Ym1pdHRpbmc9eyAhZGF0YSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIH19XHJcbiAgPC9Gb3JtaWs+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2hvd0NvbW1lbnQgfSBmcm9tIFwiLi9TaG93Q29tbWVudFwiXHJcblxyXG50eXBlIE15U2hvd0NvbW1lbnRzUHJvcHMgPSB7XHJcbiAgY29tbWVudHM6IGFueVtdXHJcbiAgcG9zdElkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBbGxDb21tZW50czogUmVhY3QuRkM8TXlTaG93Q29tbWVudHNQcm9wcz4gPSAoeyBjb21tZW50cywgcG9zdElkIH0pOiBhbnkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gPFNob3dDb21tZW50IGtleT17IGluZGV4IH0gX2lkPXsgaXRlbS5pZEF1dGhvciB9IGRhdGU9eyBpdGVtLmNyZWF0ZWRBdCB9IHRleHQ9eyBpdGVtLnRleHQgfSBpZENvbW1lbnQ9eyBpdGVtLl9pZCB9IGNvbW1lbnRzPXsgaXRlbS5jb21tZW50cyB9IHBvc3RJZD17IHBvc3RJZCB9IC8+XHJcbiAgfSlcclxuICByZXR1cm4gPHNlY3Rpb24+XHJcbiAgICB7IGNvbW1lbnRzLmxlbmd0aCAhPT0gMCA/IGNvbW1lbnQgOiA8aDQ+0JrQvtC80LXQvdGC0LDRgNGW0LIg0L/QvtC60Lgg0YnQviDQvdC10LzQsNGUPC9oND4gfVxyXG4gIDwvc2VjdGlvbj5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCJcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZS9uby1pbXBvcnRhbnRcIlxyXG5pbXBvcnQgYmFzZVN0eWxlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXNcIlxyXG5pbXBvcnQgeyBhdXRob3JRdWVyeSB9IGZyb20gXCIuL3F1ZXJ5c1wiXHJcbmltcG9ydCB7IEF2YXRhciwgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzXCJcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbW1lbnRcIlxyXG5cclxudHlwZSBNeVNob3dDb21tZW50UHJvcHMgPSB7XHJcbiAgX2lkOiBzdHJpbmdcclxuICBkYXRlOiBzdHJpbmdcclxuICB0ZXh0OiBzdHJpbmdcclxuICBpZENvbW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG4gIGNvbW1lbnRzOiBhbnlbXVxyXG4gIHBvc3RJZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93Q29tbWVudDogUmVhY3QuRkM8TXlTaG93Q29tbWVudFByb3BzPiA9ICh7IF9pZCwgZGF0ZSwgdGV4dCwgaWRDb21tZW50LCBjb21tZW50cywgcG9zdElkIH0pOiBhbnkgPT4ge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KGF1dGhvclF1ZXJ5LCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgX2lkIH1cclxuICB9KVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz5cclxuICBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3J9YFxyXG4gIGNvbnN0IHsgYXV0aG9yIH0gPSBkYXRhXHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17IGNzcyhiYXNlU3R5bGUuZmxleFZGUykgfT5cclxuICAgIDxBdmF0YXIgYXZhdGFyPXsgYXV0aG9yLmF2YXRhciB9IG5hbWU9eyBhdXRob3IubmFtZSB9IHNpemU9J1MnIC8+XHJcbiAgICA8Q29tbWVudCBuYW1lPXsgYXV0aG9yLm5hbWUgfSBkYXRlPXsgZGF0ZSB9IHRleHQ9eyB0ZXh0IH0gaWRDb21tZW50PXsgaWRDb21tZW50IH0gY29tbWVudHM9eyBjb21tZW50cyB9IHBvc3RJZD17IHBvc3RJZCB9IC8+XHJcbiAgPC9zZWN0aW9uPlxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbW1lbnRNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDb21tZW50KCRwb3N0SWQ6IElEISwgJGlkQXV0aG9yOiBJRCEsICR0ZXh0OiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVDb21tZW50KHBvc3RJZDogJHBvc3RJZCwgaWRBdXRob3I6ICRpZEF1dGhvciwgdGV4dDogJHRleHQpIHtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZENvbW1lbnQoJF9pZDogSUQhLCAkaWRBdXRob3I6IElEISwgJHRleHQ6IFN0cmluZyEpIHtcclxuICAgIGFkZENvbW1lbnQoX2lkOiAkX2lkLCBpZEF1dGhvcjogJGlkQXV0aG9yLCB0ZXh0OiAkdGV4dCkge1xyXG4gICAgICBjb21tZW50cyB7XHJcbiAgICAgICAgaWRBdXRob3JcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmAiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgY29tbWVudHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBjb21tZW50cygkcG9zdElkOiBJRCEpIHtcclxuICAgIGNvbW1lbnRzKHBvc3RJZDogJHBvc3RJZCkge1xyXG4gICAgICBfaWRcclxuICAgICAgaWRBdXRob3JcclxuICAgICAgdGV4dFxyXG4gICAgICBjcmVhdGVkQXRcclxuICAgICAgY29tbWVudHMge1xyXG4gICAgICAgIGlkQXV0aG9yXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBhdXRob3JRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBhdXRob3IoJF9pZDogSUQhKSB7XHJcbiAgICBhdXRob3IoX2lkOiAkX2lkKSB7XHJcbiAgICAgIGF2YXRhclxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==