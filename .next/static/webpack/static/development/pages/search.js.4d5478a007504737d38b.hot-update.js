webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list/style/css */ "./node_modules/antd/lib/list/style/css.js");
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);















var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var LANGUAGE = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Rust'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'starts',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'starts',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库项目开发主语言
 * page: 分页页面
 */

var selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
};

var FilterLink = function FilterLink(_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order;
  // const doSearch = () => {
  //     Router.push({
  //         pathname: '/search',
  //         query: {
  //             query,
  //             lang,
  //             sort,
  //             order
  //         }
  //     });
  // };
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc'); // if (page) queryString += `page=${page}`;

  /**
   * 1.SEO
   * 2.while click on the 'Best Match', aviod sort and order are null
   */

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/search".concat(queryString)
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, name));
};

function Search(_ref2) {
  var router = _ref2.router,
      repos = _ref2.repos;
  //get query
  console.log(repos);
  console.log(router);

  var querys = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, router.query);

  var _router$query = router.query,
      lang = _router$query.lang,
      sort = _router$query.sort,
      order = _router$query.order;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3536735437" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      className: "jsx-3536735437" + " " + "list-header"
    }, "Language"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGE,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3536735437"
      }, item) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      className: "jsx-3536735437" + " " + "list-header"
    }, "Sorted"),
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      } else {
        selected = false;
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3536735437"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "3536735437"
  }, ".root.jsx-3536735437{padding:20px 0;}.list-header.jsx-3536735437{font-weight:800;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Kd0IsQUFHb0MsQUFHQyxlQUZwQixDQUdtQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaG9jaHVuZ3dvbmcvRG9jdW1lbnRzL1JlYWN0L25leHRqcy1wcm9qZWN0L3BhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJyk7XG5cbmNvbnN0IExBTkdVQUdFID0gW1xuICAgICdKYXZhU2NyaXB0JyxcbiAgICAnSFRNTCcsXG4gICAgJ0NTUycsXG4gICAgJ1R5cGVTY3JpcHQnLFxuICAgICdKYXZhJyxcbiAgICAnUnVzdCcsXG5dO1xuXG5jb25zdCBTT1JUX1RZUEVTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0Jlc3QgTWF0Y2gnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNb3N0IFN0YXJzJyxcbiAgICAgICAgdmFsdWU6ICdzdGFydHMnLFxuICAgICAgICBvcmRlcjogJ2Rlc2MnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGZXdlc3QgU3RhcnMnLFxuICAgICAgICB2YWx1ZTogJ3N0YXJ0cycsXG4gICAgICAgIG9yZGVyOiAnYXNjJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTW9zdCBGb3JrcycsXG4gICAgICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgICAgICBvcmRlcjogJ2Rlc2MnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGZXdlc3QgRm9ya3MnLFxuICAgICAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICAgICAgb3JkZXI6ICdhc2MnXG4gICAgfVxuXTtcblxuLyoqXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cbiAqIG9yZGVyOiDmjpLluo/pobrluo9cbiAqIGxhbmc6IOS7k+W6k+mhueebruW8gOWPkeS4u+ivreiogFxuICogcGFnZTog5YiG6aG16aG16Z2iXG4gKi9cblxuIGNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xuICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNlMzYyMDknLFxuICAgICBmb250V2VpZ2h0OiAxMDAsIFxuIH1cblxuIGNvbnN0IEZpbHRlckxpbmsgPSAoeyBuYW1lLCBxdWVyeSwgbGFuZywgc29ydCwgb3JkZXIgfSkgPT4ge1xuICAgIC8vIGNvbnN0IGRvU2VhcmNoID0gKCkgPT4ge1xuICAgIC8vICAgICBSb3V0ZXIucHVzaCh7XG4gICAgLy8gICAgICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAgIC8vICAgICAgICAgcXVlcnk6IHtcbiAgICAvLyAgICAgICAgICAgICBxdWVyeSxcbiAgICAvLyAgICAgICAgICAgICBsYW5nLFxuICAgIC8vICAgICAgICAgICAgIHNvcnQsXG4gICAgLy8gICAgICAgICAgICAgb3JkZXJcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgP3F1ZXJ5PSR7cXVlcnl9YDtcbiAgICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCZsYW5nPSR7bGFuZ31gO1xuICAgIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8ICdkZXNjJyB9YDtcbiAgICAvLyBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYHBhZ2U9JHtwYWdlfWA7XG5cbiAgICAvKipcbiAgICAgKiAxLlNFT1xuICAgICAqIDIud2hpbGUgY2xpY2sgb24gdGhlICdCZXN0IE1hdGNoJywgYXZpb2Qgc29ydCBhbmQgb3JkZXIgYXJlIG51bGxcbiAgICAgKi9cbiAgICByZXR1cm4gPExpbmsgaHJlZj17IGAvc2VhcmNoJHtxdWVyeVN0cmluZ31gIH0+PGE+eyBuYW1lIH08L2E+PC9MaW5rPlxuIH1cblxuZnVuY3Rpb24gU2VhcmNoKHsgcm91dGVyLCByZXBvcyB9KSB7XG4gICAgLy9nZXQgcXVlcnlcbiAgICBjb25zb2xlLmxvZyhyZXBvcyk7XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcblxuICAgIGNvbnN0IHsgLi4uIHF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnN0IHsgbGFuZywgc29ydCwgb3JkZXIgfSA9IHJvdXRlci5xdWVyeTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkxhbmd1YWdlPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2VsZWN0ZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IGl0ZW0gfTwvc3Bhbj4gOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnF1ZXJ5cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydGVkPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnQmVzdCBNYXRjaCcgJiYgIXNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID8gPHNwYW4+eyBpdGVtLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uIHF1ZXJ5cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcbiAgICBcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXBvczoge1xuICAgICAgICAgICAgICAgIHRvdGFsX2NvdW50OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTI7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcbiAgICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcbiAgICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYycgfWA7XG4gICAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGBwYWdlPSR7cGFnZX1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YFxuICAgIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVwb3M6IHJlc3VsdC5kYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7Il19 */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/search.js */"));
}

Search.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, query, sort, lang, order, page, queryString, result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            // ?q=react+language:javascript&sort=stars&order=desc&page=2;
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
            if (page) queryString += "page=".concat(page);
            _context.next = 10;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.4d5478a007504737d38b.hot-update.js.map