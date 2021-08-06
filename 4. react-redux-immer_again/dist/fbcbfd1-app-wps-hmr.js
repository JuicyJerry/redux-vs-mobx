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
  logIn,
  logOut
} = __webpack_require__(/*! ./actions/user */ "./actions/user.js");

const App = () => {
  _s();

  /*
    user: {
        isLoggingIn: true,
        data: null,
    },
  */
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
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
    dispatch(logOut());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.isLoggingIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\uB85C\uADF8\uC778 \uC911") : user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.data.nickname) : "로그인 해주세요", !user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onClick
  }, "\uB85C\uADF8\uC778") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

_s(App, "nzGEixufVT/Sh4uQiBGfg5ePSsM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
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
/******/ 	__webpack_require__.h = () => ("399de71f4978253b1bfa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmJjYmZkMS1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNO0FBQUVJLE9BQUY7QUFBU0M7QUFBVCxJQUFvQkMsbUJBQU8sQ0FBQyx5Q0FBRCxDQUFqQzs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsTUFBTTtBQUFBOztBQUNoQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxRQUFNQyxJQUFJLEdBQUdMLHdEQUFXLENBQUVNLEtBQUQsSUFBV0EsS0FBSyxDQUFDRCxJQUFsQixDQUF4QjtBQUNBLFFBQU1FLFFBQVEsR0FBR1Isd0RBQVcsRUFBNUI7QUFFQSxRQUFNUyxPQUFPLEdBQUdWLGtEQUFXLENBQUMsTUFBTTtBQUNoQztBQUVBUyxZQUFRLEVBQ047QUFDQU4sU0FBSyxDQUFDO0FBQ0pRLFFBQUUsRUFBRSxTQURBO0FBRUpDLGNBQVEsRUFBRTtBQUZOLEtBQUQsQ0FGQyxDQUFSO0FBT0QsR0FWMEIsRUFVeEIsRUFWd0IsQ0FBM0I7QUFZQSxRQUFNQyxRQUFRLEdBQUdiLGtEQUFXLENBQUMsTUFBTTtBQUNqQ1MsWUFBUSxDQUFDTCxNQUFNLEVBQVAsQ0FBUjtBQUNELEdBRjJCLEVBRXpCLEVBRnlCLENBQTVCO0FBSUEsc0JBQ0UsOERBQ0dHLElBQUksQ0FBQ08sV0FBTCxnQkFDQywwRkFERCxHQUVHUCxJQUFJLENBQUNRLElBQUwsZ0JBQ0YsOERBQU1SLElBQUksQ0FBQ1EsSUFBTCxDQUFVQyxRQUFoQixDQURFLEdBR0YsVUFOSixFQVNHLENBQUNULElBQUksQ0FBQ1EsSUFBTixnQkFDQztBQUFRLFdBQU8sRUFBRUw7QUFBakIsMEJBREQsZ0JBR0M7QUFBUSxXQUFPLEVBQUVHO0FBQWpCLGdDQVpKLENBREY7QUFpQkQsQ0EzQ0Q7O0dBQU1QO1VBT1NKLHNEQUNJRDs7O0tBUmJLO0FBNkNOLGlFQUFlQSxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSIsInNvdXJjZXMiOlsid2VicGFjazovLzEucmVkdXhfYWdhaW4vLi9BcHAuanN4Iiwid2VicGFjazovLzEucmVkdXhfYWdhaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IHsgbG9nSW4sIGxvZ091dCB9ID0gcmVxdWlyZShcIi4vYWN0aW9ucy91c2VyXCIpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIC8qXG4gICAgdXNlcjoge1xuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICB9LFxuKi9cbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIOu5hOuPmeq4sCDsspjrpqzrpbwg65Sw66GcIOu2hOumrO2VtOyEnCDtlZjsp4Ag7JWK6rOgIOuwlOuhnCDsl6zquLDsl5Ag7LaU6rCA7ZW07IScIO2VoCDsiJgg7J6I64ukLiDtlZjsp4Drp4wsIGFjdGlvbuydhCDrlLDroZwg67aE66as7ZW07KSAIOydtOycoOuKlCDrgpjspJHsl5Ag6rCA66m0IOyVoeyFmOydtCDrp47slYTsp4Drr4DroZwg7L2U65OcIOq0gOumrCDssKjsm5Dsl5DshJwg67aE66as7ZW07IScIOq0gOumrCDrsI8g7IKs7Jqp7ZWY64qUIOqyg1xuXG4gICAgZGlzcGF0Y2goXG4gICAgICAvLyDsi6TsoJzroZzripQg7J247ZKL7J20656RIOyXsOqysOuQmOyWtOyeiOuKlOuNsCDsl6zquLDshKAg642U66+4642w7J207YSw66GcIO2FjOyKpO2KuFxuICAgICAgbG9nSW4oe1xuICAgICAgICBpZDogXCJ6ZXJvY2hvXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIuu5hOuwgOuyiO2YuFwiLFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXIuaXNMb2dnaW5nSW4gPyAoXG4gICAgICAgIDxkaXY+66Gc6re47J24IOykkTwvZGl2PlxuICAgICAgKSA6IHVzZXIuZGF0YSA/IChcbiAgICAgICAgPGRpdj57dXNlci5kYXRhLm5pY2tuYW1lfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgXCLroZzqt7jsnbgg7ZW07KO87IS47JqUXCJcbiAgICAgICl9XG5cbiAgICAgIHshdXNlci5kYXRhID8gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PuuhnOq3uOyduDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzk5ZGU3MWY0OTc4MjUzYjFiZmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dJbiIsImxvZ091dCIsInJlcXVpcmUiLCJBcHAiLCJ1c2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9uQ2xpY2siLCJpZCIsInBhc3N3b3JkIiwib25Mb2dvdXQiLCJpc0xvZ2dpbmdJbiIsImRhdGEiLCJuaWNrbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=