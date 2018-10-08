webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/sidebar.js":
/*!******************************!*\
  !*** ./component/sidebar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/language */ "./modules/language.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/component/sidebar.js";




var actions = [{
  key: 'home',
  name: _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('home'),
  ref: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.HOME
}, {
  key: 'about',
  name: _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('about'),
  ref: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.ABOUT
}, {
  key: 'technical',
  name: _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('technical'),
  ref: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.TECHNICAL
}, {
  key: 'business',
  name: _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('business'),
  ref: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.BUSINESS
}];
var social = [{
  key: 'facebook',
  name: 'fa fa-facebook-official',
  ref: 'https://fb.com/quockhanhdev'
}, {
  key: 'github',
  name: 'fa fa-github',
  ref: "https://github.com/khanhtrancse"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var actionLinks = actions.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: item.key,
      href: item.ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "menu-item my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.name));
  });
  var socialLinks = social.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: item.key,
      className: "mx-2",
      href: item.ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 side-bar-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "blog-name",
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PATH.HOME,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('blog_name'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-description mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('blog_description'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, actionLinks)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, socialLinks)));
});

/***/ })

})
//# sourceMappingURL=index.js.427385d8a85e47fa7ceb.hot-update.js.map