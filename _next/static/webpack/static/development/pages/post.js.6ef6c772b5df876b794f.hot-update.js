webpackHotUpdate("static/development/pages/post.js",{

/***/ "./data/meta/index.js":
/*!****************************!*\
  !*** ./data/meta/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.js");


function getPostsByPage(data, page) {
  var start = (page - 1) * _config__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_POST_PER_PAGE;
  var end = page * _config__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_POST_PER_PAGE;
  var totalPage = Math.ceil(data.length / _config__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_POST_PER_PAGE);
  return {
    totalPage: totalPage,
    data: data.slice(start, end)
  };
}

function getLatestPosts(page) {
  return getPostsByPage(data, page);
}

function getPostsByCategory(category, page) {
  var cd = data.filter(function (item) {
    for (var i = 0; i < item.category.length; i++) {
      if (item.category[i] == category) {
        return true;
      }
    }

    return false;
  });
  return getPostsByPage(cd, page);
}

function getPost(id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getLatestPosts: getLatestPosts,
  getPostsByCategory: getPostsByCategory,
  getPost: getPost
});
var data = [{
  "id": 1,
  "name": "How to make your blog free.",
  "date": 1539013138,
  "date_string": "Oct 10 2018",
  "link": 'how-to-make-your-blog-free',
  "category": ["nodejs", "server", "backend", "technical"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}];

/***/ })

})
//# sourceMappingURL=post.js.6ef6c772b5df876b794f.hot-update.js.map