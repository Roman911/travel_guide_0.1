exports.ids = [5];
exports.modules = {

/***/ "./Components/Formik/Input.tsx":
/*!*************************************!*\
  !*** ./Components/Formik/Input.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./Components/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./Components/Formik/styles.ts");


var _jsxFileName = "D:\\web\\travel_guide\\client\\Components\\Formik\\Input.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Input = ({
  rest
}) => {
  const {
    id,
    type,
    label
  } = rest;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].inputWrapper),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      id: id,
      name: id,
      children: (_ref) => {
        let {
          field,
          form: {
            touched,
            errors
          }
        } = _ref,
            rest = _objectWithoutProperties(_ref, ["field", "form"]);

        const {
          value
        } = field;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].label, value !== '' ? _styles__WEBPACK_IMPORTED_MODULE_5__["default"].labelTouched : null),
            htmlFor: id,
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
            type: type
          }, field), rest), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, undefined), touched[field.name] && errors[field.name] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].icon),
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 58
          }, undefined)]
        }, void 0, true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: id,
      className: "left",
      component: ___WEBPACK_IMPORTED_MODULE_4__["TextError"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL0Zvcm1pay9JbnB1dC50c3giXSwibmFtZXMiOlsiSW5wdXQiLCJyZXN0IiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3MiLCJzdHlsZXMiLCJpbnB1dFdyYXBwZXIiLCJmaWVsZCIsImZvcm0iLCJ0b3VjaGVkIiwiZXJyb3JzIiwidmFsdWUiLCJsYWJlbFRvdWNoZWQiLCJuYW1lIiwiaWNvbiIsIlRleHRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxNQUFNQSxLQUEyQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDaEQsUUFBTTtBQUFFQyxNQUFGO0FBQU1DLFFBQU47QUFBWUM7QUFBWixNQUFzQkgsSUFBNUI7QUFFQSxzQkFBTztBQUFLLGFBQVMsRUFBR0ksa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ0MsWUFBUixDQUFwQjtBQUFBLDRCQUNMLHFFQUFDLDRDQUFEO0FBQU8sUUFBRSxFQUFHTCxFQUFaO0FBQWlCLFVBQUksRUFBR0EsRUFBeEI7QUFBQSxnQkFDRyxVQUFtRDtBQUFBLFlBQWxEO0FBQUVNLGVBQUY7QUFBU0MsY0FBSSxFQUFFO0FBQUVDLG1CQUFGO0FBQVdDO0FBQVg7QUFBZixTQUFrRDtBQUFBLFlBQVhWLElBQVc7O0FBQ2xELGNBQU07QUFBRVc7QUFBRixZQUFZSixLQUFsQjtBQUNBLDRCQUFPO0FBQUEsa0NBQ0w7QUFBTyxxQkFBUyxFQUFHSCxrRUFBRyxDQUFDQywrQ0FBTSxDQUFDRixLQUFSLEVBQWVRLEtBQUssS0FBSyxFQUFWLEdBQWVOLCtDQUFNLENBQUNPLFlBQXRCLEdBQXFDLElBQXBELENBQXRCO0FBQWtGLG1CQUFPLEVBQUdYLEVBQTVGO0FBQUEsc0JBQW1HRTtBQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURLLGVBRUw7QUFBTyxnQkFBSSxFQUFFRDtBQUFiLGFBQXVCSyxLQUF2QixHQUFrQ1AsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSyxFQUdIUyxPQUFPLENBQUNGLEtBQUssQ0FBQ00sSUFBUCxDQUFQLElBQXVCSCxNQUFNLENBQUNILEtBQUssQ0FBQ00sSUFBUCxDQUE3QixpQkFBNkM7QUFBRyxxQkFBUyxFQUFHVCxrRUFBRyxDQUFDQywrQ0FBTSxDQUFDUyxJQUFSLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUgxQztBQUFBLHdCQUFQO0FBS0Q7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGVBV0wscUVBQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUdiLEVBQXJCO0FBQTBCLGVBQVMsRUFBQyxNQUFwQztBQUEyQyxlQUFTLEVBQUdjLDJDQUFTQTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBYUQsQ0FoQkQ7O0FBa0JlaEIsb0VBQWYsRSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJhcGhyb2RpdGUvbm8taW1wb3J0YW50XCJcclxuaW1wb3J0IHsgVGV4dEVycm9yIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIlxyXG5cclxudHlwZSBJbnB1dFByb3BzID0ge1xyXG4gIHJlc3Q6IHtcclxuICAgIGlkOiBzdHJpbmdcclxuICAgIHR5cGU6IHN0cmluZ1xyXG4gICAgbGFiZWw6IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHsgcmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgdHlwZSwgbGFiZWwgfSA9IHJlc3RcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5pbnB1dFdyYXBwZXIpIH0+XHJcbiAgICA8RmllbGQgaWQ9eyBpZCB9IG5hbWU9eyBpZCB9PlxyXG4gICAgICB7KHsgZmllbGQsIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sIC4uLnJlc3QgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpZWxkXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5sYWJlbCwgdmFsdWUgIT09ICcnID8gc3R5bGVzLmxhYmVsVG91Y2hlZCA6IG51bGwpIH0gaHRtbEZvcj17IGlkIH0+eyBsYWJlbCB9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB7Li4uZmllbGR9IHsuLi5yZXN0fSAvPlxyXG4gICAgICAgICAgeyB0b3VjaGVkW2ZpZWxkLm5hbWVdICYmIGVycm9yc1tmaWVsZC5uYW1lXSAmJiA8cCBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmljb24pIH0+ITwvcD4gfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9fVxyXG4gICAgPC9GaWVsZD5cclxuICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17IGlkIH0gY2xhc3NOYW1lPSdsZWZ0JyBjb21wb25lbnQ9eyBUZXh0RXJyb3IgfSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=