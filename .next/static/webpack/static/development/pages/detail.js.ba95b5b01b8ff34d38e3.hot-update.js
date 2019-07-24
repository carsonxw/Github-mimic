webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx");







function Detail(_ref) {
  var readme = _ref.readme;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: readme.content,
    isBase64: true
  });
}

Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var _ref2$ctx, _ref2$ctx$query, owner, name, req, res, readmeResp;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2$ctx = _ref2.ctx, _ref2$ctx$query = _ref2$ctx.query, owner = _ref2$ctx$query.owner, name = _ref2$ctx$query.name, req = _ref2$ctx.req, res = _ref2$ctx.res;
            console.log('detial get init');
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/readme")
            }, req, res);

          case 4:
            readmeResp = _context.sent;
            return _context.abrupt("return", {
              readme: readmeResp.data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail, 'readme'));

/***/ })

})
//# sourceMappingURL=detail.js.ba95b5b01b8ff34d38e3.hot-update.js.map