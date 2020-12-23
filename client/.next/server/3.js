exports.ids = [3];
exports.modules = {

/***/ "./modules/Search/Components/SearchPresent.tsx":
/*!*****************************************************!*\
  !*** ./modules/Search/Components/SearchPresent.tsx ***!
  \*****************************************************/
/*! exports provided: SearchPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPresent", function() { return SearchPresent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./modules/Search/Components/styles.ts");

var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Search\\Components\\SearchPresent.tsx";



const SearchPresent = ({
  data,
  formik,
  value,
  setValue,
  ready,
  status
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].input),
      type: "text",
      value: value,
      onChange: e => {
        setValue(e.target.value);
      },
      disabled: !ready,
      placeholder: "\u041F\u043E\u0448\u0443\u043A \u043D\u0430 Google \u041A\u0430\u0440\u0442\u0430\u0445"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined), data.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].select),
      size: data.length,
      id: "description",
      name: "description",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      children: status === 'OK' && data.map((value, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          onClick: formik.handleSubmit,
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].option),
          value: value.description,
          children: value.description
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 16
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 27
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./modules/Search/Components/styles.ts":
/*!*********************************************!*\
  !*** ./modules/Search/Components/styles.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
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
    boxShadow: `4px 4px 10px 1px ${_variabels__WEBPACK_IMPORTED_MODULE_1__["shadows"].shadow}`
  },
  input: {
    padding: 10,
    fontSize: '1.4rem',
    border: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__["borders"].borderInput}`
  },
  select: {
    overflow: 'hidden',
    border: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__["borders"].borderInput}`,
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

/***/ }),

/***/ "./modules/Search/Containers/Search.tsx":
/*!**********************************************!*\
  !*** ./modules/Search/Containers/Search.tsx ***!
  \**********************************************/
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
/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-places-autocomplete */ "use-places-autocomplete");
/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_SearchPresent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SearchPresent */ "./modules/Search/Components/SearchPresent.tsx");

var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\Search\\Containers\\Search.tsx";





const Search = ({
  panTo
}) => {
  const {
    ready,
    value,
    suggestions: {
      status,
      data
    },
    setValue,
    clearSuggestions
  } = use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default()({
    requestOptions: {
      // @ts-ignore
      location: {
        lat: () => 49.026151,
        lng: () => 31.483070
      },
      radius: 50 * 1000
    }
  });
  const initialValues = {
    description: ''
  };

  const onSubmit = async values => {
    setValue(values.description, false);
    clearSuggestions();

    try {
      const results = await Object(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["getGeocode"])({
        address: values.description
      });
      const {
        lat,
        lng
      } = await Object(use_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["getLatLng"])(results[0]);
      panTo({
        lat,
        lng
      });
    } catch (e) {
      console.log(e);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    children: formik => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_SearchPresent__WEBPACK_IMPORTED_MODULE_4__["SearchPresent"], {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 14
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL1NlYXJjaC9Db21wb25lbnRzL1NlYXJjaFByZXNlbnQudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvU2VhcmNoL0NvbXBvbmVudHMvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvU2VhcmNoL0NvbnRhaW5lcnMvU2VhcmNoLnRzeCJdLCJuYW1lcyI6WyJTZWFyY2hQcmVzZW50IiwiZGF0YSIsImZvcm1payIsInZhbHVlIiwic2V0VmFsdWUiLCJyZWFkeSIsInN0YXR1cyIsImNzcyIsInN0eWxlcyIsIndyYXBwZXIiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJzZWxlY3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwibWFwIiwiaW5kZXgiLCJoYW5kbGVTdWJtaXQiLCJvcHRpb24iLCJkZXNjcmlwdGlvbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsInJpZ2h0Iiwid2lkdGgiLCJmb3JtIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic2hhZG93IiwicGFkZGluZyIsImZvbnRTaXplIiwiYm9yZGVyIiwiYm9yZGVycyIsImJvcmRlcklucHV0Iiwib3ZlcmZsb3ciLCJjdXJzb3IiLCJjb2xvciIsInRleHQiLCJob3ZlciIsIlNlYXJjaCIsInBhblRvIiwic3VnZ2VzdGlvbnMiLCJjbGVhclN1Z2dlc3Rpb25zIiwidXNlUGxhY2VzQXV0b2NvbXBsZXRlIiwicmVxdWVzdE9wdGlvbnMiLCJsb2NhdGlvbiIsImxhdCIsImxuZyIsInJhZGl1cyIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlc3VsdHMiLCJnZXRHZW9jb2RlIiwiYWRkcmVzcyIsImdldExhdExuZyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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QSwrQkFDTCxxRUFBQyx1RUFBRDtBQUFlLGNBQUksRUFBR0QsSUFBdEI7QUFBNkIsZ0JBQU0sRUFBR0MsTUFBdEM7QUFBK0MsZUFBSyxFQUFHQyxLQUF2RDtBQUErRCxrQkFBUSxFQUFHQyxRQUExRTtBQUFxRixlQUFLLEVBQUdDLEtBQTdGO0FBQXFHLGdCQUFNLEVBQUdDO0FBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBR0Q7QUFMSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFPRCxDQTdCRDs7QUErQmV1QyxxRUFBZixFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZS9uby1pbXBvcnRhbnRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxudHlwZSBTZWFyY2hQcmVzZW50UHJvcHMgPSB7XHJcbiAgZGF0YTogYW55XHJcbiAgZm9ybWlrOiBhbnlcclxuICB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgc2V0VmFsdWU6IGFueVxyXG4gIHJlYWR5OiBhbnlcclxuICBzdGF0dXM6IGFueVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoUHJlc2VudDogUmVhY3QuRkM8U2VhcmNoUHJlc2VudFByb3BzPiA9ICh7IGRhdGEsIGZvcm1paywgdmFsdWUsIHNldFZhbHVlLCByZWFkeSwgc3RhdHVzIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy53cmFwcGVyKSB9PlxyXG4gICAgPGlucHV0XHJcbiAgICAgIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuaW5wdXQpIH1cclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICB2YWx1ZT17IHZhbHVlIH1cclxuICAgICAgb25DaGFuZ2U9eyBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfX1cclxuICAgICAgZGlzYWJsZWQ9eyAhcmVhZHkgfVxyXG4gICAgICBwbGFjZWhvbGRlcj0n0J/QvtGI0YPQuiDQvdCwIEdvb2dsZSDQmtCw0YDRgtCw0YUnXHJcbiAgICAvPlxyXG5cclxuICAgIHsgZGF0YS5sZW5ndGggIT09IDAgPyA8c2VsZWN0IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuc2VsZWN0KSB9IHNpemU9eyBkYXRhLmxlbmd0aCB9IGlkPSdkZXNjcmlwdGlvbicgbmFtZT0nZGVzY3JpcHRpb24nIG9uQ2hhbmdlPXsgZm9ybWlrLmhhbmRsZUNoYW5nZSB9IG9uQmx1cj17IGZvcm1pay5oYW5kbGVCbHVyIH0gPlxyXG4gICAgICB7IHN0YXR1cyA9PT0gJ09LJyAmJiBkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxvcHRpb24gb25DbGljaz17IGZvcm1pay5oYW5kbGVTdWJtaXQgfSBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLm9wdGlvbikgfSBrZXk9e2luZGV4fSB2YWx1ZT17dmFsdWUuZGVzY3JpcHRpb259PnsgdmFsdWUuZGVzY3JpcHRpb24gfTwvb3B0aW9uPlxyXG4gICAgICB9KSB9XHJcbiAgICA8L3NlbGVjdD4gOiBudWxsIH1cclxuICA8L2Rpdj5cclxufSIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50J1xyXG5cclxuaW1wb3J0IHsgYm9yZGVycywgc2hhZG93cywgdGV4dCB9IGZyb20gJy4uLy4uLy4uL3ZhcmlhYmVscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHpJbmRleDogMTAsXHJcbiAgICB0b3A6IDYwLFxyXG4gICAgcmlnaHQ6IDEwLFxyXG4gICAgd2lkdGg6IDQwMFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBib3hTaGFkb3c6IGA0cHggNHB4IDEwcHggMXB4ICR7c2hhZG93cy5zaGFkb3d9YFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgZm9udFNpemU6ICcxLjRyZW0nLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7IGJvcmRlcnMuYm9yZGVySW5wdXQgfWBcclxuICB9LFxyXG4gIHNlbGVjdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7IGJvcmRlcnMuYm9yZGVySW5wdXQgfWAsXHJcbiAgICBwYWRkaW5nOiAwXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgZm9udFNpemU6ICcxLjJyZW0nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogdGV4dC5ob3ZlclxyXG4gICAgfVxyXG4gIH1cclxufSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCB1c2VQbGFjZXNBdXRvY29tcGxldGUsIHsgZ2V0R2VvY29kZSwgZ2V0TGF0TG5nIH0gZnJvbSAndXNlLXBsYWNlcy1hdXRvY29tcGxldGUnXHJcbmltcG9ydCB7IFNlYXJjaFByZXNlbnQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9TZWFyY2hQcmVzZW50XCJcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHBhblRvIH0pID0+IHtcclxuICBjb25zdCB7IHJlYWR5LCB2YWx1ZSwgc3VnZ2VzdGlvbnM6IHsgc3RhdHVzLCBkYXRhIH0sIHNldFZhbHVlLCBjbGVhclN1Z2dlc3Rpb25zIH0gPSB1c2VQbGFjZXNBdXRvY29tcGxldGUoe1xyXG4gICAgcmVxdWVzdE9wdGlvbnM6IHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBsb2NhdGlvbjogeyBsYXQ6ICgpID0+IDQ5LjAyNjE1MSwgbG5nOiAoKSA9PiAzMS40ODMwNzAgfSxcclxuICAgICAgcmFkaXVzOiA1MCAqIDEwMDBcclxuICAgIH0sXHJcbiAgfSlcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgZGVzY3JpcHRpb246ICcnXHJcbiAgfVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0VmFsdWUodmFsdWVzLmRlc2NyaXB0aW9uLCBmYWxzZSlcclxuICAgIGNsZWFyU3VnZ2VzdGlvbnMoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdldEdlb2NvZGUoeyBhZGRyZXNzOiB2YWx1ZXMuZGVzY3JpcHRpb24gfSlcclxuICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pXHJcbiAgICAgIHBhblRvKHsgbGF0LCBsbmcgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17IGluaXRpYWxWYWx1ZXMgfSBvblN1Ym1pdD17IG9uU3VibWl0IH0gPlxyXG4gICAge2Zvcm1payA9PiB7XHJcbiAgICAgIHJldHVybiA8Rm9ybT5cclxuICAgICAgICA8U2VhcmNoUHJlc2VudCBkYXRhPXsgZGF0YSB9IGZvcm1paz17IGZvcm1payB9IHZhbHVlPXsgdmFsdWUgfSBzZXRWYWx1ZT17IHNldFZhbHVlIH0gcmVhZHk9eyByZWFkeSB9IHN0YXR1cz17IHN0YXR1cyB9IC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIH19XHJcbiAgPC9Gb3JtaWs+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=