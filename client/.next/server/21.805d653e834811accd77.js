exports.ids = [21];
exports.modules = {

/***/ "bCAk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./modules/Comments/Containers/querys.ts

const commentsQuery = external_apollo_boost_["gql"]`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
      idAuthor
      text
      createdAt
      comments {
        idAuthor
        text
        createdAt
      }
    }
  }
`;
const authorQuery = external_apollo_boost_["gql"]`
  query author($_id: ID!) {
    author(_id: $_id) {
      avatar
      name
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: ./Components/index.tsx + 45 modules
var Components = __webpack_require__("5cwH");

// EXTERNAL MODULE: ./styles/login.ts
var login = __webpack_require__("XCxI");

// EXTERNAL MODULE: ./variabels/colors.ts
var colors = __webpack_require__("JGdP");

// CONCATENATED MODULE: ./modules/Comments/Components/styles.ts


/* harmony default export */ var styles = (no_important_["StyleSheet"].create({
  wrapper: {
    border: `2px solid ${colors["b" /* borders */].border}`,
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
    color: colors["e" /* icons */],
    opacity: 0.7,
    padding: '0 5px'
  },
  link: {
    color: colors["c" /* btn */],
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
// CONCATENATED MODULE: ./modules/Comments/Containers/mutations.ts

const CreateCommentMutation = external_apollo_boost_["gql"]`
  mutation createComment($postId: ID!, $idAuthor: ID!, $text: String!) {
    createComment(postId: $postId, idAuthor: $idAuthor, text: $text) {
      _id
    }
  }
`;
const AddCommentMutation = external_apollo_boost_["gql"]`
  mutation addComment($_id: ID!, $idAuthor: ID!, $text: String!) {
    addComment(_id: $_id, idAuthor: $idAuthor, text: $text) {
      comments {
        idAuthor
        text
      }
    }
  }
`;
// CONCATENATED MODULE: ./modules/Comments/Containers/CreateComment.tsx

















const CreateComment = ({
  postId,
  idComment,
  isFirstComment,
  handleClick
}) => {
  const {
    data
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const [createComment] = Object(react_hooks_["useMutation"])(CreateCommentMutation);
  const [addComment] = Object(react_hooks_["useMutation"])(AddCommentMutation);
  const initialValues = {
    text: ''
  };
  const validationSchema = external_yup_["object"]({
    text: external_yup_["string"]().min(3, 'Короткий коментар').required('Required')
  });

  const onSubmit = (values, {
    resetForm
  }) => {
    const ref = [{
      query: commentsQuery,
      variables: {
        postId: postId
      }
    }];
    const query = {
      variables: {
        idAuthor: data.userId,
        _id: idComment,
        postId: postId,
        text: values.text
      },
      refetchQueries: ref
    };

    if (isFirstComment) {
      createComment(query).then(data => {
        if (data) {
          resetForm();
        }
      });
    } else {
      addComment(query).then(data => {
        if (data) {
          handleClick && handleClick();
          resetForm();
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    children: formik => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Object(no_important_["css"])(styles.wrapper),
          children: data ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["d" /* Avatar */], {
              avatar: data.avatar,
              name: data.name,
              size: "S"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Object(no_important_["css"])(styles.block),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
                control: "textarea",
                name: "text",
                label: "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."
              })
            })]
          }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: Object(no_important_["css"])(styles.iconNoAvatar),
              icon: free_brands_svg_icons_["faOptinMonster"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Object(no_important_["css"])(styles.block),
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["\u041F\u0440\u0438\u0432\u0456\u0442! \u0429\u043E\u0431 \u043A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438, \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/login",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: Object(no_important_["css"])(styles.link),
                    children: "\u0443\u0432\u0456\u0439\u0442\u0438"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(login["a" /* default */].inputSub, styles.submit, isFirstComment ? styles.submitPosition : null),
          children: [isFirstComment || /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["f" /* ButtonLink */], {
            nameBtn: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
            handleClick: handleClick
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
            type: "submit",
            nameBtn: "\u041A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438",
            isSubmitting: !data
          })]
        })]
      });
    }
  });
};
// EXTERNAL MODULE: ./styles/index.ts
var styles_0 = __webpack_require__("vBmG");

// CONCATENATED MODULE: ./modules/Comments/Components/CommentText.tsx




const CommentText = ({
  text
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Object(no_important_["css"])(styles.blockText),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: Object(no_important_["css"])(styles.text),
      children: text
    })
  });
};
// CONCATENATED MODULE: ./modules/Comments/Components/Comment.tsx










const Comment = ({
  name,
  date,
  text,
  idComment,
  comments,
  postId
}) => {
  const {
    0: showCreateComment,
    1: setShowCreateComment
  } = Object(external_react_["useState"])(false);
  const comment = comments.length !== 0 && comments.map((item, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShowComment, {
      text: item.text,
      _id: item.idAuthor,
      idComment: idComment,
      comments: [],
      date: item.createdAt,
      postId: postId
    }, index);
  });

  const handleClick = () => {
    setShowCreateComment(!showCreateComment);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles.blockUser),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles_0["a" /* default */].flexSB),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["o" /* NameUser */], {
        name: name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["g" /* Date */], {
        date: date,
        format: 'LL'
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CommentText, {
      text: text
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["f" /* ButtonLink */], {
      handleClick: handleClick,
      nameBtn: "\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438"
    }), showCreateComment && /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateComment, {
      idComment: idComment,
      isFirstComment: false,
      handleClick: handleClick,
      postId: postId
    }), comment]
  });
};
// CONCATENATED MODULE: ./modules/Comments/Containers/ShowComment.tsx









const ShowComment = ({
  _id,
  date,
  text,
  idComment,
  comments,
  postId
}) => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(authorQuery, {
    variables: {
      _id
    }
  });
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["k" /* Loading */], {});
  if (error) return `Error! ${error}`;
  const {
    author
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles_0["a" /* default */].flexVFS),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["d" /* Avatar */], {
      avatar: author.avatar,
      name: author.name,
      size: "S"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Comment, {
      name: author.name,
      date: date,
      text: text,
      idComment: idComment,
      comments: comments,
      postId: postId
    })]
  });
};
// CONCATENATED MODULE: ./modules/Comments/Containers/ShowAllComments.tsx



const ShowAllComments = ({
  comments,
  postId
}) => {
  const comment = comments.map((item, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShowComment, {
      _id: item.idAuthor,
      date: item.createdAt,
      text: item.text,
      idComment: item._id,
      comments: item.comments,
      postId: postId
    }, index);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    children: comments.length !== 0 ? comment : /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      children: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432 \u043F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454"
    })
  });
};
// CONCATENATED MODULE: ./modules/Comments/Containers/Comments.tsx










const Comments = ({
  id
}) => {
  const {
    loading,
    error,
    data
  } = Object(client_["useQuery"])(commentsQuery, {
    variables: {
      postId: id
    }
  });
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["k" /* Loading */], {});
  if (error) return `Error! ${error}`;
  const {
    comments
  } = data;
  const commentsReverse = comments.reverse();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: "\u041A\u041E\u041C\u0415\u041D\u0422\u0410\u0420\u0406"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateComment, {
      postId: id,
      isFirstComment: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShowAllComments, {
      comments: commentsReverse,
      postId: id
    })]
  });
};

/* harmony default export */ var Containers_Comments = __webpack_exports__["default"] = (Comments);

/***/ })

};;