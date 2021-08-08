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


const userSlice = __webpack_require__(/*! ./reducers/user */ "./reducers/user.js");

const App = () => {
  _s();

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
    dispatch(userSlice.actions.logOut()); // 툴킷이 알아서 액션을 만들어줘요
  }, []);
  const onAddPost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(addPost());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.isLoggingIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\uB85C\uADF8\uC778 \uC911") : user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.data.nickname) : "로그인 해주세요", !user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onClick
  }, "\uB85C\uADF8\uC778") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onAddPost
  }, "\uAC8C\uC2DC\uAE00 \uC791\uC131"));
};

_s(App, "H7UdQu+K9kXXfQ1uo4EayyH2OIs=", false, function () {
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
/******/ 	__webpack_require__.h = () => ("2a041d6097b7b7ab1e6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUwMWIzZi1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNO0FBQUVJO0FBQUYsSUFBWUMsbUJBQU8sQ0FBQyx5Q0FBRCxDQUF6QixFQUE2Qzs7O0FBQzdDLE1BQU07QUFBRUM7QUFBRixJQUFjRCxtQkFBTyxDQUFDLHlDQUFELENBQTNCLEVBQStDOzs7QUFDL0MsTUFBTUUsU0FBUyxHQUFHRixtQkFBTyxDQUFDLDJDQUFELENBQXpCOztBQUVBLE1BQU1HLEdBQUcsR0FBRyxNQUFNO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR04sd0RBQVcsQ0FBRU8sS0FBRCxJQUFXQSxLQUFLLENBQUNELElBQWxCLENBQXhCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHVCx3REFBVyxFQUE1QjtBQUVBLFFBQU1VLE9BQU8sR0FBR1gsa0RBQVcsQ0FBQyxNQUFNO0FBQ2hDO0FBRUFVLFlBQVEsRUFDTjtBQUNBUCxTQUFLLENBQUM7QUFDSlMsUUFBRSxFQUFFLFNBREE7QUFFSkMsY0FBUSxFQUFFO0FBRk4sS0FBRCxDQUZDLENBQVI7QUFPRCxHQVYwQixFQVV4QixFQVZ3QixDQUEzQjtBQVlBLFFBQU1DLFFBQVEsR0FBR2Qsa0RBQVcsQ0FBQyxNQUFNO0FBQ2pDVSxZQUFRLENBQUNKLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsTUFBbEIsRUFBRCxDQUFSLENBRGlDLENBQ0s7QUFDdkMsR0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7QUFJQSxRQUFNQyxTQUFTLEdBQUdqQixrREFBVyxDQUFDLE1BQU07QUFDbENVLFlBQVEsQ0FBQ0wsT0FBTyxFQUFSLENBQVI7QUFDRCxHQUY0QixFQUUxQixFQUYwQixDQUE3QjtBQUlBLHNCQUNFLDhEQUNHRyxJQUFJLENBQUNVLFdBQUwsZ0JBQ0MsMEZBREQsR0FFR1YsSUFBSSxDQUFDVyxJQUFMLGdCQUNGLDhEQUFNWCxJQUFJLENBQUNXLElBQUwsQ0FBVUMsUUFBaEIsQ0FERSxHQUdGLFVBTkosRUFTRyxDQUFDWixJQUFJLENBQUNXLElBQU4sZ0JBQ0M7QUFBUSxXQUFPLEVBQUVSO0FBQWpCLDBCQURELGdCQUdDO0FBQVEsV0FBTyxFQUFFRztBQUFqQixnQ0FaSixlQWNFO0FBQVEsV0FBTyxFQUFFRztBQUFqQix1Q0FkRixDQURGO0FBa0JELENBMUNEOztHQUFNVjtVQUNTTCxzREFDSUQ7OztLQUZiTTtBQTRDTixpRUFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluLy4vQXBwLmpzeCIsIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCB7IGxvZ0luIH0gPSByZXF1aXJlKFwiLi9hY3Rpb25zL3VzZXJcIik7IC8vIOu5hOuPmeq4sCDslaHshZjrp4wg65Sw6528IOqwgOyguOyZlOuLpFxuY29uc3QgeyBhZGRQb3N0IH0gPSByZXF1aXJlKFwiLi9hY3Rpb25zL3Bvc3RcIik7IC8vIOu5hOuPmeq4sCDslaHshZjrp4wg65Sw6528IOqwgOyguOyZlOuLpFxuY29uc3QgdXNlclNsaWNlID0gcmVxdWlyZShcIi4vcmVkdWNlcnMvdXNlclwiKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8g67mE64+Z6riwIOyymOumrOulvCDrlLDroZwg67aE66as7ZW07IScIO2VmOyngCDslYrqs6Ag67CU66GcIOyXrOq4sOyXkCDstpTqsIDtlbTshJwg7ZWgIOyImCDsnojri6QuIO2VmOyngOunjCwgYWN0aW9u7J2EIOuUsOuhnCDrtoTrpqztlbTspIAg7J207Jyg64qUIOuCmOykkeyXkCDqsIDrqbQg7JWh7IWY7J20IOunjuyVhOyngOuvgOuhnCDsvZTrk5wg6rSA66asIOywqOybkOyXkOyEnCDrtoTrpqztlbTshJwg6rSA66asIOuwjyDsgqzsmqntlZjripQg6rKDXG5cbiAgICBkaXNwYXRjaChcbiAgICAgIC8vIOyLpOygnOuhnOuKlCDsnbjtkovsnbTrnpEg7Jew6rKw65CY7Ja07J6I64qU642wIOyXrOq4sOyEoCDrjZTrr7jrjbDsnbTthLDroZwg7YWM7Iqk7Yq4XG4gICAgICBsb2dJbih7XG4gICAgICAgIGlkOiBcInplcm9jaG9cIixcbiAgICAgICAgcGFzc3dvcmQ6IFwi67mE67CA67KI7Zi4XCIsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy5sb2dPdXQoKSk7IC8vIO2ItO2Ct+ydtCDslYzslYTshJwg7JWh7IWY7J2EIOunjOuTpOyWtOykmOyalFxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25BZGRQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZFBvc3QoKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dXNlci5pc0xvZ2dpbmdJbiA/IChcbiAgICAgICAgPGRpdj7roZzqt7jsnbgg7KSRPC9kaXY+XG4gICAgICApIDogdXNlci5kYXRhID8gKFxuICAgICAgICA8ZGl2Pnt1c2VyLmRhdGEubmlja25hbWV9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIuuhnOq3uOyduCDtlbTso7zshLjsmpRcIlxuICAgICAgKX1cblxuICAgICAgeyF1c2VyLmRhdGEgPyAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+66Gc6re47J24PC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQWRkUG9zdH0+6rKM7Iuc6riAIOyekeyEsTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmEwNDFkNjA5N2I3YjdhYjFlNmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dJbiIsInJlcXVpcmUiLCJhZGRQb3N0IiwidXNlclNsaWNlIiwiQXBwIiwidXNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJvbkNsaWNrIiwiaWQiLCJwYXNzd29yZCIsIm9uTG9nb3V0IiwiYWN0aW9ucyIsImxvZ091dCIsIm9uQWRkUG9zdCIsImlzTG9nZ2luZ0luIiwiZGF0YSIsIm5pY2tuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==