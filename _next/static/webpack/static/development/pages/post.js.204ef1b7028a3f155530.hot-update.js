webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/container */ "./component/container.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/language */ "./modules/language.js");
/* harmony import */ var _component_no_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/no-data */ "./component/no-data.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _data_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/detail */ "./data/detail/index.js");
/* harmony import */ var _data_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/meta */ "./data/meta/index.js");
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/pages/post.js";

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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      content: null,
      meta: {}
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var myUrl = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href);
      console.log(myUrl.pathname);
      console.log('local path', _config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH.POST); //Get id of target post

      var query = myUrl.search;
      var regex = /id=[0-9]*/g;
      var idString = query.match(regex)[0];
      var id = idString.slice(3, idString.length);
      console.log(query);
      console.log('Get information of post has id', id); //Get data of target post

      var content = _data_detail__WEBPACK_IMPORTED_MODULE_6__["default"].getDetail(id);
      var meta = _data_meta__WEBPACK_IMPORTED_MODULE_7__["default"].getPost(id);
      console.log('data', content, meta);

      if (content && meta) {
        this.setState({
          meta: meta,
          content: content
        });
      } else {
        console.log('error', content, meta);
        this.setState({
          meta: {
            name: _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('title_error')
          },
          content: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.state.meta.name ? this.state.meta.name : _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('default_post_name');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.state.content));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.204ef1b7028a3f155530.hot-update.js.map