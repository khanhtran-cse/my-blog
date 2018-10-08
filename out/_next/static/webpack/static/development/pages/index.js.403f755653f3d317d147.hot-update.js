webpackHotUpdate("static/development/pages/index.js",{

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
    className: "col-12 col-md-4 col-lg-3 inline-block px-2",
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
    class: "post-card-separator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.403f755653f3d317d147.hot-update.js.map