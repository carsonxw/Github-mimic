webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");












var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var url = '/search/repositories?q=react';

function Index(_ref) {
  var userRepos = _ref.userRepos,
      starredRepos = _ref.starredRepos,
      user = _ref.user;
  console.log(userRepos);
  console.log(starredRepos);
  console.log(user);

  if (!user || !user.id) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "jsx-2098573479" + " " + "root"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
      className: "jsx-2098573479"
    }, "Please Log In with Your Github Account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "Click to Log In"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "2098573479"
    }, ".root.jsx-2098573479{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEI0QixBQUdzQyxhQUNBLDBFQUNTLDhFQUNDLG1HQUNKLDZGQUN2QiIsImZpbGUiOiIvVXNlcnMvaG9jaHVuZ3dvbmcvRG9jdW1lbnRzL1JlYWN0L25leHRqcy1wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbyc7XG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKTtcblxuY29uc3QgdXJsID0gJy9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnO1xuXG5mdW5jdGlvbiBJbmRleCAoeyB1c2VyUmVwb3MsIHN0YXJyZWRSZXBvcywgdXNlciB9KSB7XG4gICAgY29uc29sZS5sb2codXNlclJlcG9zKTtcbiAgICBjb25zb2xlLmxvZyhzdGFycmVkUmVwb3MpO1xuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UgTG9nIEluIHdpdGggWW91ciBHaXRodWIgQWNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwcmltYXJ5JyBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17IHB1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMIH1cbiAgICAgICAgICAgICAgICA+ICAgXG4gICAgICAgICAgICAgICAgICAgIENsaWNrIHRvIExvZyBJblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyX3VybH0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVzZSBhdmF0YXJcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvXCI+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUmVwb3MgLm1hcCgocmVwbyxrZXkpID0+IDxSZXBvIGtleT17a2V5fSByZXBvPXtyZXBvfS8+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9LlxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJpbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0gXG5cbi8qZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdouS5i+mXtOavj+asoei3s+i9rOaXtuiwg+eUqFxu5ZCM5pe25Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ77yM6Iul6K6/6ZeuaW5kZXjpobXpnaLvvIxnZXRJbml0aWFsUHJvcHPkuZ/kvJrooqvosIPnlKhcbuWxnuS6jm5vZGXnjq/looPvvIzkuI3lrZjlnKjlrqLmiLfnq69kb21haW7ov5nkupt3aW5kb3fkuIvmiY3mnInnmoTnjq/looNcbiovXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSByZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlcjtcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogJy91c2VyL3JlcG9zJyB9LCBjdHgucmVxLCBjdHgucmVzKTtcbiAgICBjb25zdCB1c2VyU3RhcnJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAgICAgIHsgdXJsOiBgL3VzZXIvc3RhcnJlZGAgfSxcbiAgICAgICAgY3R4LnJlcSxcbiAgICAgICAgY3R4LnJlc1xuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyUmVwb3MuZGF0YSxcbiAgICAgICAgc3RhcnJlZFJlcG9zOiB1c2VyU3RhcnJlZFJlcG9zLmRhdGFcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyOiBzdGF0ZS51c2VyLCBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbmRleCkgOyJdfQ== */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/index.js */"));
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1569677356" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1569677356" + " " + "user-info"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: user.avatar_url,
    alt: "use avatar",
    className: "jsx-1569677356" + " " + "avatar"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "jsx-1569677356" + " " + "login"
  }, user.login), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "jsx-1569677356" + " " + "name"
  }, user.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "jsx-1569677356" + " " + "bio"
  }, user.bio), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    className: "jsx-1569677356" + " " + "email"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "mail",
    style: {
      marginRight: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "mailto:".concat(user.email),
    className: "jsx-1569677356"
  }, user.email))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1569677356" + " " + "user-repos"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1569677356" + " " + "user-repo"
  }, userRepos.map(function (repo, key) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: key,
      repo: repo
    });
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "1569677356"
  }, ".root.jsx-1569677356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.user-info.jsx-1569677356{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-1569677356{font-weight:800;font-size:20px;margin-top:20px;}..jsx-1569677356 .name.jsx-1569677356{font-size:16px;color:#777;}.bio.jsx-1569677356{margin-top:20px;color:#333;}.avatar.jsx-1569677356{width:100%;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOER3QixBQUdrQyxBQUtELEFBT0ksQUFLRCxBQUlDLEFBSUwsV0FDTyxDQXBCQSxHQVlQLENBTEksQUFTSixVQUhmLENBSUEsRUFJQSxDQXBCa0IsQ0FPRSxnQkFDcEIsMkJBZDJCLFlBT1YsMEVBRWxCLHVCQVBDLHVEQU9BIiwiZmlsZSI6Ii9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpO1xuXG5jb25zdCB1cmwgPSAnL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCc7XG5cbmZ1bmN0aW9uIEluZGV4ICh7IHVzZXJSZXBvcywgc3RhcnJlZFJlcG9zLCB1c2VyIH0pIHtcbiAgICBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xuICAgIGNvbnNvbGUubG9nKHN0YXJyZWRSZXBvcyk7XG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBMb2cgSW4gd2l0aCBZb3VyIEdpdGh1YiBBY2NvdW50PC9wPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3ByaW1hcnknIFxuICAgICAgICAgICAgICAgICAgICBocmVmPXsgcHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkwgfVxuICAgICAgICAgICAgICAgID4gICBcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdG8gTG9nIEluXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJfdXJsfSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidXNlIGF2YXRhclwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+e3VzZXIuZW1haWx9PC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9cIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJSZXBvcyAubWFwKChyZXBvLGtleSkgPT4gPFJlcG8ga2V5PXtrZXl9IHJlcG89e3JlcG99Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH0uXG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmlvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSBcblxuLypnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i5LmL6Ze05q+P5qyh6Lez6L2s5pe26LCD55SoXG7lkIzml7blnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnvvIzoi6Xorr/pl65pbmRleOmhtemdou+8jGdldEluaXRpYWxQcm9wc+S5n+S8muiiq+iwg+eUqFxu5bGe5LqObm9kZeeOr+Wig++8jOS4jeWtmOWcqOWuouaIt+err2RvbWFpbui/meS6m3dpbmRvd+S4i+aJjeacieeahOeOr+Wig1xuKi9cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVkdXhTdG9yZSB9KSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyO1xuICAgIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHVzZXJSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KHsgdXJsOiAnL3VzZXIvcmVwb3MnIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xuICAgIGNvbnN0IHVzZXJTdGFycmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcbiAgICAgICAgeyB1cmw6IGAvdXNlci9zdGFycmVkYCB9LFxuICAgICAgICBjdHgucmVxLFxuICAgICAgICBjdHgucmVzXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxuICAgICAgICBzdGFycmVkUmVwb3M6IHVzZXJTdGFycmVkUmVwb3MuZGF0YVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZGV4KSA7Il19 */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/index.js */"));
}
/*getInitialProps 会在客户端不同页面之间每次跳转时调用
同时在服务端渲染的时候，若访问index页面，getInitialProps也会被调用
属于node环境，不存在客户端domain这些window下才有的环境
*/


Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, user, userRepos, userStarredRepos;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            user = reduxStore.getState().user;

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {});

          case 4:
            _context.next = 6;
            return api.request({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 6:
            userRepos = _context.sent;
            _context.next = 9;
            return api.request({
              url: "/user/starred"
            }, ctx.req, ctx.res);

          case 9:
            userStarredRepos = _context.sent;
            return _context.abrupt("return", {
              userRepos: userRepos.data,
              starredRepos: userStarredRepos.data
            });

          case 11:
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.1c86a28bf86d09453bd6.hot-update.js.map