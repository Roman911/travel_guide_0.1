exports.ids = [25];
exports.modules = {

/***/ "5od3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "use-places-autocomplete"
var external_use_places_autocomplete_ = __webpack_require__("Kuyt");
var external_use_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_use_places_autocomplete_);

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: ./variabels/index.ts
var variabels = __webpack_require__("BD5b");

// CONCATENATED MODULE: ./modules/Search/Components/styles.ts


/* harmony default export */ var styles = (no_important_["StyleSheet"].create({
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
    boxShadow: `4px 4px 10px 1px ${variabels["g" /* shadows */].shadow}`
  },
  input: {
    padding: 10,
    fontSize: '1.4rem',
    border: `1px solid ${variabels["a" /* borders */].borderInput}`
  },
  select: {
    overflow: 'hidden',
    border: `1px solid ${variabels["a" /* borders */].borderInput}`,
    padding: 0
  },
  option: {
    padding: 10,
    fontSize: '1.2rem',
    cursor: 'pointer',
    ':hover': {
      color: variabels["i" /* text */].hover
    }
  }
}));
// CONCATENATED MODULE: ./modules/Search/Components/SearchPresent.tsx





const SearchPresent = ({
  data,
  formik,
  value,
  setValue,
  ready,
  status
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      className: Object(no_important_["css"])(styles.input),
      type: "text",
      value: value,
      onChange: e => {
        setValue(e.target.value);
      },
      disabled: !ready,
      placeholder: "\u041F\u043E\u0448\u0443\u043A \u043D\u0430 Google \u041A\u0430\u0440\u0442\u0430\u0445"
    }), data.length !== 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
      className: Object(no_important_["css"])(styles.select),
      size: data.length,
      id: "description",
      name: "description",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      children: status === 'OK' && data.map((value, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          onClick: formik.handleSubmit,
          className: Object(no_important_["css"])(styles.option),
          value: value.description,
          children: value.description
        }, index);
      })
    }) : null]
  });
};
// CONCATENATED MODULE: ./modules/Search/Containers/Search.tsx






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
  } = external_use_places_autocomplete_default()({
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
      const results = await Object(external_use_places_autocomplete_["getGeocode"])({
        address: values.description
      });
      const {
        lat,
        lng
      } = await Object(external_use_places_autocomplete_["getLatLng"])(results[0]);
      panTo({
        lat,
        lng
      });
    } catch (e) {
      console.log(e);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    children: formik => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Form"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchPresent, {
          data: data,
          formik: formik,
          value: value,
          setValue: setValue,
          ready: ready,
          status: status
        })
      });
    }
  });
};

/* harmony default export */ var Containers_Search = __webpack_exports__["default"] = (Search);

/***/ })

};;