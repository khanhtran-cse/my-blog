webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/list-card.js":
/*!********************************!*\
  !*** ./component/list-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/container */ "./component/container.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/language */ "./modules/language.js");
/* harmony import */ var _component_post_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/post-card */ "./component/post-card.js");
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/component/list-card.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * List of props:
 * - getData = (page)=>{totalPage: number,data: []}
 * - title: string
 */





var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      page: 1,
      totalPage: 1,
      data: []
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderData(1);
    }
  }, {
    key: "goToNextPage",
    value: function goToNextPage() {
      this.renderData(this.state.page + 1);
    }
  }, {
    key: "goToPrePage",
    value: function goToPrePage() {
      this.renderData(this.state.page - 1);
    }
  }, {
    key: "renderData",
    value: function renderData(page) {
      var _this2 = this;

      if (!this.props.getData) {
        return;
      }

      var result = this.props.getData(page); //Render post card

      var posts = result.data.map(function (item) {
        return Object(_component_post_card__WEBPACK_IMPORTED_MODULE_3__["default"])(item);
      });
      var list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: 1,
        className: "col-12 row mx-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, posts); //Render action

      var move = [];

      if (page > 1) {
        move.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "mx-2",
          onClick: function onClick() {
            return _this2.goToPrePage();
          },
          key: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('previous_page')));
      }

      if (page < result.totalPage) {
        move.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "mx-2",
          onClick: function onClick() {
            return _this2.goToNextPage();
          },
          key: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('next_page')));
      }

      var moveView = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: 2,
        className: "col-12 d-flex justify-content-center row mx-0 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, move); // console.log(posts);

      this.setState({
        data: [list, moveView],
        totalPage: result.totalPage,
        page: page
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.state.data);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./component/post-card.js":
/*!********************************!*\
  !*** ./component/post-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/component/post-card.js";


/* harmony default export */ __webpack_exports__["default"] = (function (post) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: post.id,
    className: "post-card col-12 col-md-4 col-lg-3 inline-block px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.POST + '/' + post.link,
    className: "post-card-image-block mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-card-image mx-auto px-auto",
    style: {
      background: "url(".concat(post.image, ")")
    },
    alt: post.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-card__meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-card-time my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, post.date_string)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: post.name,
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.POST + '/' + post.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, post.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "post-card-separator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/language */ "./modules/language.js");
/* harmony import */ var _data_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/post */ "./data/post.js");
/* harmony import */ var _component_list_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/list-card */ "./component/list-card.js");
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        title: _modules_language__WEBPACK_IMPORTED_MODULE_1__["default"].t('blog_name'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.state.data);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4c3e715a767286bfa7f8.hot-update.js.map