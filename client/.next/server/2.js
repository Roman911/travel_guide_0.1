exports.ids = [2];
exports.modules = {

/***/ "./Components/InformWindow/InformWindow.tsx":
/*!**************************************************!*\
  !*** ./Components/InformWindow/InformWindow.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./Components/index.tsx");
/* harmony import */ var _hooks_usePortal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePortal */ "./hooks/usePortal.tsx");
/* harmony import */ var _styles___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/ */ "./styles/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./Components/InformWindow/styles.ts");

var _jsxFileName = "D:\\web\\travel_guide\\client\\Components\\InformWindow\\InformWindow.tsx";










const InformWindow = ({
  id,
  children,
  closedModal,
  handleClick
}) => {
  const target = Object(_hooks_usePortal__WEBPACK_IMPORTED_MODULE_7__["default"])(id);
  const cln = closedModal ? Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].wrapper, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].closedModal) : Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].wrapper, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].openModal);
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].text),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].bottom),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
        handleClick: handleClick,
        nameBtn: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        isSubmitting: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined), target);
};

/* harmony default export */ __webpack_exports__["default"] = (InformWindow);

/***/ }),

/***/ "./Components/InformWindow/styles.ts":
/*!*******************************************!*\
  !*** ./Components/InformWindow/styles.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variabels/colors */ "./variabels/colors.ts");


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
/* harmony default export */ __webpack_exports__["default"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 40,
    width: 300,
    boxShadow: `2px 2px 8px 2px ${_variabels_colors__WEBPACK_IMPORTED_MODULE_1__["shadows"].shadowDark}`,
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

/***/ }),

/***/ "./hooks/usePortal.tsx":
/*!*****************************!*\
  !*** ./hooks/usePortal.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

function usePortal(id) {
  const rootElemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function setupElement() {
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

/* harmony default export */ __webpack_exports__["default"] = (usePortal);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL0luZm9ybVdpbmRvdy9JbmZvcm1XaW5kb3cudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvSW5mb3JtV2luZG93L3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VQb3J0YWwudHN4Il0sIm5hbWVzIjpbIkluZm9ybVdpbmRvdyIsImlkIiwiY2hpbGRyZW4iLCJjbG9zZWRNb2RhbCIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwidXNlUG9ydGFsIiwiY2xuIiwiY3NzIiwic3R5bGVzIiwid3JhcHBlciIsIm9wZW5Nb2RhbCIsImNyZWF0ZVBvcnRhbCIsImJhc2VTdHlsZXMiLCJmbGV4IiwiaWNvbiIsImZhSW5mbyIsInRleHQiLCJib3R0b20iLCJ0cmFuc2xhdGVLZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5S2V5ZnJhbWVzIiwib3BhY2l0eSIsIm9wYWNpdHlLZXlmcmFtZXNDbG9zZWQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIndpZHRoIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInNoYWRvd0RhcmsiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiY3JlYXRlUm9vdEVsZW1lbnQiLCJyb290Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYWRkUm9vdEVsZW1lbnQiLCJyb290RWxlbSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicm9vdEVsZW1SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzZXR1cEVsZW1lbnQiLCJleGlzdGluZ1BhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50IiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJnZXRSb290RWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUMsVUFBTjtBQUFnQkMsYUFBaEI7QUFBNkJDO0FBQTdCLENBQUQsS0FBNkU7QUFDaEcsUUFBTUMsTUFBTSxHQUFHQyxnRUFBUyxDQUFDTCxFQUFELENBQXhCO0FBQ0EsUUFBTU0sR0FBRyxHQUFHSixXQUFXLEdBQUdLLGtFQUFHLENBQUNDLCtDQUFNLENBQUNDLE9BQVIsRUFBaUJELCtDQUFNLENBQUNOLFdBQXhCLENBQU4sR0FBNkNLLGtFQUFHLENBQUNDLCtDQUFNLENBQUNDLE9BQVIsRUFBaUJELCtDQUFNLENBQUNFLFNBQXhCLENBQXZFO0FBRUEsc0JBQU9DLDhEQUFZLGVBQ2pCO0FBQUssYUFBUyxFQUFHTCxHQUFqQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFHQyxrRUFBRyxDQUFDSyxnREFBVSxDQUFDQyxJQUFaLENBQXBCO0FBQUEsOEJBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsaUJBQVMsRUFBR04sa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ00sSUFBUixDQUFoQztBQUFnRCxZQUFJLEVBQUdDLHdFQUFNQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFHUixrRUFBRyxDQUFDQywrQ0FBTSxDQUFDUSxJQUFSLENBQWxCO0FBQUEsa0JBQ0lmO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLGVBQVMsRUFBR00sa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ1MsTUFBUixDQUFwQjtBQUFBLDZCQUNFLHFFQUFDLHdDQUFEO0FBQVEsbUJBQVcsRUFBR2QsV0FBdEI7QUFBb0MsZUFBTyxFQUFDLDRDQUE1QztBQUFzRCxvQkFBWSxFQUFHO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURpQixFQVlqQkMsTUFaaUIsQ0FBbkI7QUFjRCxDQWxCRDs7QUFvQmVMLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNbUIsa0JBQWtCLEdBQUc7QUFDekIsUUFBTTtBQUNKQyxhQUFTLEVBQUU7QUFEUCxHQURtQjtBQUt6QixVQUFRO0FBQ05BLGFBQVMsRUFBRTtBQURMO0FBTGlCLENBQTNCO0FBVUEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkIsVUFBUTtBQUNOQyxXQUFPLEVBQUU7QUFESCxHQURlO0FBS3ZCLFFBQU07QUFDSkEsV0FBTyxFQUFFO0FBREw7QUFMaUIsQ0FBekI7QUFTQSxNQUFNQyxzQkFBc0IsR0FBRztBQUM3QixVQUFRO0FBQ05ELFdBQU8sRUFBRTtBQURILEdBRHFCO0FBSzdCLFFBQU07QUFDSkEsV0FBTyxFQUFFO0FBREw7QUFMdUIsQ0FBL0I7QUFVZUUsZ0lBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUMvQmYsU0FBTyxFQUFFO0FBQ1BnQixZQUFRLEVBQUUsT0FESDtBQUVQQyxPQUFHLEVBQUUsR0FGRTtBQUdQQyxTQUFLLEVBQUUsRUFIQTtBQUlQQyxTQUFLLEVBQUUsR0FKQTtBQUtQQyxhQUFTLEVBQUcsbUJBQW1CQyx5REFBTyxDQUFDQyxVQUFZLEVBTDVDO0FBTVBDLFdBQU8sRUFBRSxXQU5GO0FBT1BDLGNBQVUsRUFBRTtBQVBMLEdBRHNCO0FBVS9CdkIsV0FBUyxFQUFFO0FBQ1R3QixpQkFBYSxFQUFFLENBQUNoQixrQkFBRCxFQUFxQkUsZ0JBQXJCLENBRE47QUFFVGUscUJBQWlCLEVBQUU7QUFGVixHQVZvQjtBQWMvQmpDLGFBQVcsRUFBRTtBQUNYZ0MsaUJBQWEsRUFBRSxDQUFDWixzQkFBRCxDQURKO0FBRVhhLHFCQUFpQixFQUFFO0FBRlIsR0Fka0I7QUFrQi9CbkIsTUFBSSxFQUFFO0FBQ0pvQixTQUFLLEVBQUU7QUFESCxHQWxCeUI7QUFxQi9CdEIsTUFBSSxFQUFFO0FBQ0p1QixVQUFNLEVBQUUsRUFESjtBQUVKVCxTQUFLLEVBQUUsTUFGSDtBQUdKUSxTQUFLLEVBQUUsTUFISDtBQUlKRSxlQUFXLEVBQUU7QUFKVCxHQXJCeUI7QUEyQi9CckIsUUFBTSxFQUFFO0FBQ05zQixjQUFVLEVBQUUsRUFETjtBQUVOQyxhQUFTLEVBQUU7QUFGTDtBQTNCdUIsQ0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0MsaUJBQVQsQ0FBMkJ6QyxFQUEzQixFQUF1QztBQUNyQyxRQUFNMEMsYUFBNkIsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRDO0FBQ0FGLGVBQWEsQ0FBQ0csWUFBZCxDQUEyQixJQUEzQixFQUFpQzdDLEVBQWpDO0FBQ0EsU0FBTzBDLGFBQVA7QUFDRDs7QUFDRCxTQUFTSSxjQUFULENBQXdCQyxRQUF4QixFQUEyQztBQUN6Q0osVUFBUSxDQUFDSyxJQUFULENBQWNDLFlBQWQsQ0FDRUYsUUFERixFQUVFSixRQUFRLENBQUNLLElBQVQsQ0FBY0UsZ0JBQWQsQ0FBK0JDLGtCQUZqQztBQUlEOztBQUNELFNBQVM5QyxTQUFULENBQW1CTCxFQUFuQixFQUErQjtBQUM3QixRQUFNb0QsV0FBVyxHQUFHQyxvREFBTSxDQUFxQixJQUFyQixDQUExQjtBQUNBQyx5REFBUyxDQUFDLFNBQVNDLFlBQVQsR0FBd0I7QUFDaEMsVUFBTUMsY0FBYyxHQUFHYixRQUFRLENBQUNjLGFBQVQsQ0FBd0IsSUFBR3pELEVBQUcsRUFBOUIsQ0FBdkI7QUFDQSxVQUFNMEQsVUFBVSxHQUFHRixjQUFjLElBQUlmLGlCQUFpQixDQUFDekMsRUFBRCxDQUF0RDs7QUFDQSxRQUFJLENBQUN3RCxjQUFMLEVBQXFCO0FBQ25CVixvQkFBYyxDQUFDWSxVQUFELENBQWQ7QUFDRDs7QUFDREEsY0FBVSxDQUFDQyxXQUFYLENBQXVCUCxXQUFXLENBQUNRLE9BQW5DO0FBQ0EsV0FBTyxTQUFTQyxhQUFULEdBQXlCO0FBQzlCVCxpQkFBVyxDQUFDUSxPQUFaLENBQW9CRSxNQUFwQjs7QUFDQSxVQUFJSixVQUFVLENBQUNLLFVBQVgsQ0FBc0JDLE1BQXRCLEtBQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkNOLGtCQUFVLENBQUNJLE1BQVg7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQWJRLEVBYU4sQ0FBQzlELEVBQUQsQ0FiTSxDQUFUOztBQWNBLFdBQVNpRSxXQUFULEdBQXVCO0FBQ3JCLFFBQUksQ0FBQ2IsV0FBVyxDQUFDUSxPQUFqQixFQUEwQjtBQUN4QlIsaUJBQVcsQ0FBQ1EsT0FBWixHQUFzQmpCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNEOztBQUNELFdBQU9RLFdBQVcsQ0FBQ1EsT0FBbkI7QUFDRDs7QUFDRCxTQUFPSyxXQUFXLEVBQWxCO0FBQ0Q7O0FBRWM1RCx3RUFBZixFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIlxyXG5pbXBvcnQgeyBmYUluZm8gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHVzZVBvcnRhbCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlUG9ydGFsXCJcclxuaW1wb3J0IGJhc2VTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzLydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIlxyXG5cclxudHlwZSBJbmZvcm1XaW5kb3dQcm9wcyA9IHtcclxuICBpZDogc3RyaW5nXHJcbiAgY2hpbGRyZW46IHN0cmluZ1xyXG4gIGNsb3NlZE1vZGFsOiBudWxsIHwgYm9vbGVhblxyXG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEluZm9ybVdpbmRvdyA9ICh7IGlkLCBjaGlsZHJlbiwgY2xvc2VkTW9kYWwsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5GQzxJbmZvcm1XaW5kb3dQcm9wcz4gPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IHVzZVBvcnRhbChpZClcclxuICBjb25zdCBjbG4gPSBjbG9zZWRNb2RhbCA/IGNzcyhzdHlsZXMud3JhcHBlciwgc3R5bGVzLmNsb3NlZE1vZGFsKSA6IGNzcyhzdHlsZXMud3JhcHBlciwgc3R5bGVzLm9wZW5Nb2RhbClcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xuIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY3NzKGJhc2VTdHlsZXMuZmxleCkgfT5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuaWNvbikgfSBpY29uPXsgZmFJbmZvIH0vPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMudGV4dCkgfT5cclxuICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5ib3R0b20pIH0gPlxyXG4gICAgICAgIDxCdXR0b24gaGFuZGxlQ2xpY2s9eyBoYW5kbGVDbGljayB9IG5hbWVCdG49J9CX0LDQutGA0LjRgtC4JyBpc1N1Ym1pdHRpbmc9eyBmYWxzZSB9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+LFxyXG4gICAgdGFyZ2V0LFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtV2luZG93IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnXHJcblxyXG5pbXBvcnQgeyBzaGFkb3dzIH0gZnJvbSAnLi4vLi4vdmFyaWFiZWxzL2NvbG9ycydcclxuXHJcbmNvbnN0IHRyYW5zbGF0ZUtleWZyYW1lcyA9IHtcclxuICAnMCUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyxcclxuICB9LFxyXG5cclxuICAnMTAwJSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBvcGFjaXR5S2V5ZnJhbWVzID0ge1xyXG4gICdmcm9tJzoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICB9LFxyXG5cclxuICAndG8nOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH1cclxufTtcclxuY29uc3Qgb3BhY2l0eUtleWZyYW1lc0Nsb3NlZCA9IHtcclxuICAnZnJvbSc6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfSxcclxuXHJcbiAgJ3RvJzoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDEwMCxcclxuICAgIHJpZ2h0OiA0MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBib3hTaGFkb3c6IGAycHggMnB4IDhweCAycHggJHsgc2hhZG93cy5zaGFkb3dEYXJrIH1gLFxyXG4gICAgcGFkZGluZzogJzE1cHggMjBweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzUwNTA1MCdcclxuICB9LFxyXG4gIG9wZW5Nb2RhbDoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW3RyYW5zbGF0ZUtleWZyYW1lcywgb3BhY2l0eUtleWZyYW1lc10sXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzLCA4MDBtcycsXHJcbiAgfSxcclxuICBjbG9zZWRNb2RhbDoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW29wYWNpdHlLZXlmcmFtZXNDbG9zZWRdLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcxMTAwbXMnLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgY29sb3I6ICcjZmZmJ1xyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgaGVpZ2h0OiAzNixcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDIwXHJcbiAgfSxcclxuICBib3R0b206IHtcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgdGV4dEFsaWduOiAnZW5kJ1xyXG4gIH1cclxufSkiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm9vdEVsZW1lbnQoaWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHJvb3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICByb290Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcclxuICByZXR1cm4gcm9vdENvbnRhaW5lclxyXG59XHJcbmZ1bmN0aW9uIGFkZFJvb3RFbGVtZW50KHJvb3RFbGVtOiBFbGVtZW50KSB7XHJcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoXHJcbiAgICByb290RWxlbSxcclxuICAgIGRvY3VtZW50LmJvZHkubGFzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcsXHJcbiAgKVxyXG59XHJcbmZ1bmN0aW9uIHVzZVBvcnRhbChpZDogc3RyaW5nKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1SZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKVxyXG4gIHVzZUVmZmVjdChmdW5jdGlvbiBzZXR1cEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApXHJcbiAgICBjb25zdCBwYXJlbnRFbGVtID0gZXhpc3RpbmdQYXJlbnQgfHwgY3JlYXRlUm9vdEVsZW1lbnQoaWQpXHJcbiAgICBpZiAoIWV4aXN0aW5nUGFyZW50KSB7XHJcbiAgICAgIGFkZFJvb3RFbGVtZW50KHBhcmVudEVsZW0pXHJcbiAgICB9XHJcbiAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKHJvb3RFbGVtUmVmLmN1cnJlbnQpXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCgpIHtcclxuICAgICAgcm9vdEVsZW1SZWYuY3VycmVudC5yZW1vdmUoKVxyXG4gICAgICBpZiAocGFyZW50RWxlbS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gLTEpIHtcclxuICAgICAgICBwYXJlbnRFbGVtLnJlbW92ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaWRdKVxyXG4gIGZ1bmN0aW9uIGdldFJvb3RFbGVtKCkge1xyXG4gICAgaWYgKCFyb290RWxlbVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJvb3RFbGVtUmVmLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RFbGVtUmVmLmN1cnJlbnRcclxuICB9XHJcbiAgcmV0dXJuIGdldFJvb3RFbGVtKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUG9ydGFsIl0sInNvdXJjZVJvb3QiOiIifQ==