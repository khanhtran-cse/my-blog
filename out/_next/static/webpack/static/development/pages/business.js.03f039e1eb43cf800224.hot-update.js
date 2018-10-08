webpackHotUpdate("static/development/pages/business.js",{

/***/ "./data/post.js":
/*!**********************!*\
  !*** ./data/post.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  getLatestPosts: getLatestPosts,
  getPostsByCategory: getPostsByCategory
});
var data = [{
  "id": 17,
  "name": "How to make your blog free.",
  "date": 1539013138,
  "date_string": "Oct 11 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend", "technical"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 16,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "Oct 10 2018",
  "category": ["nodejs", "server", "technical", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2017/12/1_gVQU50zNWjL1kihKKQ5zYQ.jpeg"
}, {
  "id": 15,
  "name": "How to make your blog free.",
  "date": 1539013138,
  "date_string": "Oct 11 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend", "technical"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 14,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "Oct 10 2018",
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2017/12/1_gVQU50zNWjL1kihKKQ5zYQ.jpeg"
}, {
  "id": 13,
  "name": "How to make your blog free.",
  "date": 1539013138,
  "date_string": "Oct 11 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 12,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "Oct 10 2018",
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2017/12/1_gVQU50zNWjL1kihKKQ5zYQ.jpeg"
}, {
  "id": 11,
  "name": "How to make your blog free.",
  "date": 1539013138,
  "date_string": "Oct 11 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 10,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "Oct 10 2018",
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2017/12/1_gVQU50zNWjL1kihKKQ5zYQ.jpeg"
}, {
  "id": 9,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker and learn about docker",
  "date": 1539013138,
  "date_string": "Oct 1 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2017/08/INSPIRED.png"
}, {
  "id": 8,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "Sep 15 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 7,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 6,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 5,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 4,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 3,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 2,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}, {
  "id": 1,
  "name": "How to deploy a Node.js application to Amazon Web Services using Docker",
  "date": 1539013138,
  "date_string": "July 24 2018",
  "link": 'how-to-deloy-a-nodejs-applicatioin',
  "category": ["nodejs", "server", "backend"],
  "image": "http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
}];

/***/ })

})
//# sourceMappingURL=business.js.03f039e1eb43cf800224.hot-update.js.map