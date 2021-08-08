"use strict";
self["webpackHotUpdate_1_redux_again"]("app",{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();




const {
  logIn
} = __webpack_require__(/*! ./actions/user */ "./actions/user.js"); // 비동기 액션만 따라 가져왔다


const {
  addPost
} = __webpack_require__(/*! ./actions/post */ "./actions/post.js"); // 비동기 액션만 따라 가져왔다


const userSlice = __webpack_require__(/*! ./reducers/userSlice */ "./reducers/userSlice.js");

const App = () => {
  _s();

  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const {
    email,
    password
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // 비동기 처리를 따로 분리해서 하지 않고 바로 여기에 추가해서 할 수 있다. 하지만, action을 따로 분리해준 이유는 나중에 가면 액션이 많아지므로 코드 관리 차원에서 분리해서 관리 및 사용하는 것
    dispatch( // 실제로는 인풋이랑 연결되어있는데 여기선 더미데이터로 테스트
    logIn({
      id: "zerocho",
      password: "비밀번호"
    }));
  }, []);
  const onLogout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(userSlice.actions.logOut()); // 툴킷이 알아서 액션을 만들어줘요
  }, []);
  const onAddPost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(addPost());
  }, []);
  const onChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    dispatch(userSlice.actions.setEmail(e.target.value));
  }, []);
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    dispatch(userSlice.actions.setPassword(e.target.value));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.isLoggingIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\uB85C\uADF8\uC778 \uC911") : user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.data.nickname) : "로그인 해주세요", !user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onClick
  }, "\uB85C\uADF8\uC778") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    value: email,
    onChange: onChangeEmail,
    onBlur: onChangeEmail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    value: password,
    onChange: onChangePassword,
    onBlur: onChangePassword
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onAddPost
  }, "\uAC8C\uC2DC\uAE00 \uC791\uC131"));
};

_s(App, "SCf/JgGLyI5RNItAa6fUWyc99RY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
});

_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb0b858391ace0b8cf20")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMS5yZWR1eF9hZ2Fpbi8uL0FwcC5qc3giLCJ3ZWJwYWNrOi8vMS5yZWR1eF9hZ2Fpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgeyBsb2dJbiB9ID0gcmVxdWlyZShcIi4vYWN0aW9ucy91c2VyXCIpOyAvLyDruYTrj5nquLAg7JWh7IWY66eMIOuUsOudvCDqsIDsoLjsmZTri6RcbmNvbnN0IHsgYWRkUG9zdCB9ID0gcmVxdWlyZShcIi4vYWN0aW9ucy9wb3N0XCIpOyAvLyDruYTrj5nquLAg7JWh7IWY66eMIOuUsOudvCDqsIDsoLjsmZTri6RcbmNvbnN0IHVzZXJTbGljZSA9IHJlcXVpcmUoXCIuL3JlZHVjZXJzL3VzZXJTbGljZVwiKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIOu5hOuPmeq4sCDsspjrpqzrpbwg65Sw66GcIOu2hOumrO2VtOyEnCDtlZjsp4Ag7JWK6rOgIOuwlOuhnCDsl6zquLDsl5Ag7LaU6rCA7ZW07IScIO2VoCDsiJgg7J6I64ukLiDtlZjsp4Drp4wsIGFjdGlvbuydhCDrlLDroZwg67aE66as7ZW07KSAIOydtOycoOuKlCDrgpjspJHsl5Ag6rCA66m0IOyVoeyFmOydtCDrp47slYTsp4Drr4DroZwg7L2U65OcIOq0gOumrCDssKjsm5Dsl5DshJwg67aE66as7ZW07IScIOq0gOumrCDrsI8g7IKs7Jqp7ZWY64qUIOqyg1xuXG4gICAgZGlzcGF0Y2goXG4gICAgICAvLyDsi6TsoJzroZzripQg7J247ZKL7J20656RIOyXsOqysOuQmOyWtOyeiOuKlOuNsCDsl6zquLDshKAg642U66+4642w7J207YSw66GcIO2FjOyKpO2KuFxuICAgICAgbG9nSW4oe1xuICAgICAgICBpZDogXCJ6ZXJvY2hvXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIuu5hOuwgOuyiO2YuFwiLFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMubG9nT3V0KCkpOyAvLyDtiLTtgrfsnbQg7JWM7JWE7IScIOyVoeyFmOydhCDrp4zrk6TslrTspJjsmpRcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQWRkUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRQb3N0KCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuc2V0RW1haWwoZS50YXJnZXQudmFsdWUpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dXNlci5pc0xvZ2dpbmdJbiA/IChcbiAgICAgICAgPGRpdj7roZzqt7jsnbgg7KSRPC9kaXY+XG4gICAgICApIDogdXNlci5kYXRhID8gKFxuICAgICAgICA8ZGl2Pnt1c2VyLmRhdGEubmlja25hbWV9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIuuhnOq3uOyduCDtlbTso7zshLjsmpRcIlxuICAgICAgKX1cblxuICAgICAgeyF1c2VyLmRhdGEgPyAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+66Gc6re47J24PC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgb25CbHVyPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICBvbkJsdXI9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQWRkUG9zdH0+6rKM7Iuc6riAIOyekeyEsTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmIwYjg1ODM5MWFjZTBiOGNmMjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dJbiIsInJlcXVpcmUiLCJhZGRQb3N0IiwidXNlclNsaWNlIiwiQXBwIiwidXNlciIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImRpc3BhdGNoIiwib25DbGljayIsImlkIiwib25Mb2dvdXQiLCJhY3Rpb25zIiwibG9nT3V0Iiwib25BZGRQb3N0Iiwib25DaGFuZ2VFbWFpbCIsImUiLCJzZXRFbWFpbCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dnaW5nSW4iLCJkYXRhIiwibmlja25hbWUiXSwic291cmNlUm9vdCI6IiJ9