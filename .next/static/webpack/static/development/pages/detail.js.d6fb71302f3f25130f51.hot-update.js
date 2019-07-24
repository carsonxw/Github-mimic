webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: cacheRepo, getRepo, cacheReposArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRepo", function() { return cacheRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepo", function() { return getRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheReposArray", function() { return cacheReposArray; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  //expired time: 1hr
  maxAge: 1000 * 60 * 60
});
function cacheRepo(repo) {
  var full_name = repo.full_name;
  cache.set(full_name, repo);
} // full_name: facebook/react

function getRepo(full_name) {
  return cache.get(full_name);
}
function cacheReposArray(repos) {
  repos.forEach(function (repo) {
    return cacheRepo(repo);
  });
}

/***/ })

})
//# sourceMappingURL=detail.js.d6fb71302f3f25130f51.hot-update.js.map