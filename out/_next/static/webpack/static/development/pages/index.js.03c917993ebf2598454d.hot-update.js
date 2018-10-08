webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/navigation.js":
/*!*********************************!*\
  !*** ./component/navigation.js ***!
  \*********************************/
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
var _jsxFileName = "/Users/KhanhTran/Projects/my-blog/component/navigation.js";




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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.ref,
      replace: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.name)));
  });
  var socialLinks = social.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.key,
      className: "mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar custom-nav fixed-top px-0 py-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-main col-12 d-flex row px-0 mx-0 py-0 my-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9 py-auto my-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "py-auto my-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "blog-name",
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _modules_language__WEBPACK_IMPORTED_MODULE_2__["default"].t('blog_name')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3 d-flex flex-row-reverse py-auto my-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "menu-button px-3",
    "data-toggle": "collapse",
    "data-target": "#navbarToggleExternalContent",
    "aria-controls": "navbarToggleExternalContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bars",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse col-12 px-0 py-auto my-0",
    id: "navbarToggleExternalContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, actionLinks)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, socialLinks)));
});

/***/ })

})
//# sourceMappingURL=index.js.03c917993ebf2598454d.hot-update.js.map