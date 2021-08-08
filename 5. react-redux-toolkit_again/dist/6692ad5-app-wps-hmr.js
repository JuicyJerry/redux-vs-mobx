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
    onChange: onChangeEmail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    value: password,
    onChange: onChangePassword
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
/******/ 	__webpack_require__.h = () => ("d6d5d5aa70cc87f60af6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztVQ2hFQSIsInNvdXJjZXMiOlsid2VicGFjazovLzEucmVkdXhfYWdhaW4vLi9BcHAuanN4Iiwid2VicGFjazovLzEucmVkdXhfYWdhaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IHsgbG9nSW4gfSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMvdXNlclwiKTsgLy8g67mE64+Z6riwIOyVoeyFmOunjCDrlLDrnbwg6rCA7KC47JmU64ukXG5jb25zdCB7IGFkZFBvc3QgfSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMvcG9zdFwiKTsgLy8g67mE64+Z6riwIOyVoeyFmOunjCDrlLDrnbwg6rCA7KC47JmU64ukXG5jb25zdCB1c2VyU2xpY2UgPSByZXF1aXJlKFwiLi9yZWR1Y2Vycy91c2VyU2xpY2VcIik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyDruYTrj5nquLAg7LKY66as66W8IOuUsOuhnCDrtoTrpqztlbTshJwg7ZWY7KeAIOyViuqzoCDrsJTroZwg7Jes6riw7JeQIOy2lOqwgO2VtOyEnCDtlaAg7IiYIOyeiOuLpC4g7ZWY7KeA66eMLCBhY3Rpb27snYQg65Sw66GcIOu2hOumrO2VtOykgCDsnbTsnKDripQg64KY7KSR7JeQIOqwgOuptCDslaHshZjsnbQg66eO7JWE7KeA66+A66GcIOy9lOuTnCDqtIDrpqwg7LCo7JuQ7JeQ7IScIOu2hOumrO2VtOyEnCDqtIDrpqwg67CPIOyCrOyaqe2VmOuKlCDqsoNcblxuICAgIGRpc3BhdGNoKFxuICAgICAgLy8g7Iuk7KCc66Gc64qUIOyduO2Si+ydtOuekSDsl7DqsrDrkJjslrTsnojripTrjbAg7Jes6riw7ISgIOuNlOuvuOuNsOydtO2EsOuhnCDthYzsiqTtirhcbiAgICAgIGxvZ0luKHtcbiAgICAgICAgaWQ6IFwiemVyb2Nob1wiLFxuICAgICAgICBwYXNzd29yZDogXCLruYTrsIDrsojtmLhcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLmxvZ091dCgpKTsgLy8g7Yi07YK37J20IOyVjOyVhOyEnCDslaHshZjsnYQg66eM65Ok7Ja07KSY7JqUXG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkFkZFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkUG9zdCgpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlRW1haWwgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXIuaXNMb2dnaW5nSW4gPyAoXG4gICAgICAgIDxkaXY+66Gc6re47J24IOykkTwvZGl2PlxuICAgICAgKSA6IHVzZXIuZGF0YSA/IChcbiAgICAgICAgPGRpdj57dXNlci5kYXRhLm5pY2tuYW1lfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgXCLroZzqt7jsnbgg7ZW07KO87IS47JqUXCJcbiAgICAgICl9XG5cbiAgICAgIHshdXNlci5kYXRhID8gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PuuhnOq3uOyduDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9idXR0b24+XG4gICAgICApfVxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25BZGRQb3N0fT7qsozsi5zquIAg7J6R7ISxPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNmQ1ZDVhYTcwY2M4N2Y2MGFmNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ0luIiwicmVxdWlyZSIsImFkZFBvc3QiLCJ1c2VyU2xpY2UiLCJBcHAiLCJ1c2VyIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJvbkNsaWNrIiwiaWQiLCJvbkxvZ291dCIsImFjdGlvbnMiLCJsb2dPdXQiLCJvbkFkZFBvc3QiLCJvbkNoYW5nZUVtYWlsIiwiZSIsInNldEVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2dpbmdJbiIsImRhdGEiLCJuaWNrbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=