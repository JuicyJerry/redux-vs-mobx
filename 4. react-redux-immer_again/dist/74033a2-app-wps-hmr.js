self["webpackHotUpdate_1_redux_again"]("app",{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




const {
  logIn,
  logOut
} = __webpack_require__(/*! ./actions/user */ "./actions/user.js");

class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  onClick = () => {
    this.props.dispatchLogIn({
      id: "zerocho",
      password: "비밀번호"
    });
  };
  onLogout = () => {
    this.props.dispatchLogOut(logOut());
  };

  render() {
    const {
      user
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.isLoggingIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\uB85C\uADF8\uC778 \uC911") : user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.data.nickname) : "로그인 해주세요", !user.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.onClick
    }, "\uB85C\uADF8\uC778") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.onLogout
    }, "\uB85C\uADF8\uC544\uC6C3"));
  }

} // 이 방식을 사용한다면, 해당 함수가 실행할 때마 리렌더링되어서 성능상 문제가 생길 수 있어 reselect를 사용한다. (훅스의 경우에는 resselect를 사용할 필요가 없다)
// 리덕스 state를 component props로 바꾼다


const mapStateToProps = state => ({
  user: state.user,
  posts: state.posts
}); // reselect
// 리덕스 dispatch를 component props로 바꾼다


const mapDispatchToProps = dispatch => ({
  // action login, action logout과는 다르다. 헷갈리면 앞에 dispatch를 붙여준다.
  // hooks랑 비교해보면, 이건 하나로 묶여있어서 바뀔 때마다 다같이 바꿔줘야되지만 hooks는 분리되어 있어서 바꾹 편하다
  dispatchLogIn: data => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut())
}); // connect라는 high-order component,App compoennt를 확장하는 connect hight order component


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(App));

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

/***/ }),

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
/*
 비동기 액션 커스텀
 어떻게 보면 비동기 처리도 눈속임이에요. 
 비동기 액션 크리에이터라는 기능을 미들웨어를 통해 추가하고
 동기 한 번 부르고 비동기작업안에서 끝날쯤에 동기 한번 더 부르고
 동기 액션들간에 실행 순서를 조작하는 정도밖에 안 되는거에요.
*/

const logIn = data => {
  // async action creator
  return (dispatch, getState) => {
    //async action
    dispatch(logInRequest(data));

    try {
      setTimeout(() => {
        // 서버가 없어서
        dispatch(loginSuccess({
          userId: 1,
          nickname: "zerocho"
        }));
      }, 2000);
    } catch {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};

const loginSuccess = data => {
  return {
    type: LOG_IN_SUCCESS,
    data
  };
};

const logInFailure = error => {
  return {
    type: LOG_IN_FAILURE,
    error
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT"
  };
};

module.exports = {
  logIn,
  logOut
};

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
/******/ 	__webpack_require__.h = () => ("a8ba9136624fc8e78a96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQwMzNhMi1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTTtBQUFFRSxPQUFGO0FBQVNDO0FBQVQsSUFBb0JDLG1CQUFPLENBQUMseUNBQUQsQ0FBakM7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkwsNENBQWxCLENBQWtDO0FBQ2hDTyxTQUFPLEdBQUcsTUFBTTtBQUNkLFNBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QjtBQUN2QkMsUUFBRSxFQUFFLFNBRG1CO0FBRXZCQyxjQUFRLEVBQUU7QUFGYSxLQUF6QjtBQUlELEdBTE07QUFPUEMsVUFBUSxHQUFHLE1BQU07QUFDZixTQUFLSixLQUFMLENBQVdLLGNBQVgsQ0FBMEJWLE1BQU0sRUFBaEM7QUFDRCxHQUZPOztBQUlSVyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDO0FBQUYsUUFBVyxLQUFLUCxLQUF0QjtBQUVBLHdCQUNFLDhEQUNHTyxJQUFJLENBQUNDLFdBQUwsZ0JBQ0MsMEZBREQsR0FFR0QsSUFBSSxDQUFDRSxJQUFMLGdCQUNGLDhEQUFNRixJQUFJLENBQUNFLElBQUwsQ0FBVUMsUUFBaEIsQ0FERSxHQUdGLFVBTkosRUFTRyxDQUFDSCxJQUFJLENBQUNFLElBQU4sZ0JBQ0M7QUFBUSxhQUFPLEVBQUUsS0FBS1Y7QUFBdEIsNEJBREQsZ0JBR0M7QUFBUSxhQUFPLEVBQUUsS0FBS0s7QUFBdEIsa0NBWkosQ0FERjtBQWlCRDs7QUFoQytCLEVBbUNsQztBQUNBOzs7QUFDQSxNQUFNTyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0wsTUFBSSxFQUFFSyxLQUFLLENBQUNMLElBRHNCO0FBRWxDTSxPQUFLLEVBQUVELEtBQUssQ0FBQ0M7QUFGcUIsQ0FBWixDQUF4QixFQUdJO0FBRUo7OztBQUNBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELEtBQWU7QUFDeEM7QUFDQTtBQUNBZCxlQUFhLEVBQUdRLElBQUQsSUFBVU0sUUFBUSxDQUFDckIsS0FBSyxDQUFDZSxJQUFELENBQU4sQ0FITztBQUl4Q0osZ0JBQWMsRUFBRSxNQUFNVSxRQUFRLENBQUNwQixNQUFNLEVBQVA7QUFKVSxDQUFmLENBQTNCLEVBT0E7OztBQUNBLGlFQUFlRixvREFBTyxDQUFDa0IsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNqQixHQUE3QyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQSxNQUFNbUIsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTXhCLEtBQUssR0FBSWUsSUFBRCxJQUFVO0FBQ3RCO0FBQ0EsU0FBTyxDQUFDTSxRQUFELEVBQVdJLFFBQVgsS0FBd0I7QUFDN0I7QUFDQUosWUFBUSxDQUFDSyxZQUFZLENBQUNYLElBQUQsQ0FBYixDQUFSOztBQUVBLFFBQUk7QUFDRlksZ0JBQVUsQ0FBQyxNQUFNO0FBQ2Y7QUFDQU4sZ0JBQVEsQ0FDTk8sWUFBWSxDQUFDO0FBQ1hDLGdCQUFNLEVBQUUsQ0FERztBQUVYYixrQkFBUSxFQUFFO0FBRkMsU0FBRCxDQUROLENBQVI7QUFNRCxPQVJTLEVBUVAsSUFSTyxDQUFWO0FBU0QsS0FWRCxDQVVFLE1BQU07QUFDTkssY0FBUSxDQUFDUyxZQUFZLENBQUNDLENBQUQsQ0FBYixDQUFSO0FBQ0Q7QUFDRixHQWpCRDtBQWtCRCxDQXBCRDs7QUFxQkEsTUFBTUwsWUFBWSxHQUFJWCxJQUFELElBQVU7QUFDN0IsU0FBTztBQUNMaUIsUUFBSSxFQUFFVixjQUREO0FBRUxQO0FBRkssR0FBUDtBQUlELENBTEQ7O0FBT0EsTUFBTWEsWUFBWSxHQUFJYixJQUFELElBQVU7QUFDN0IsU0FBTztBQUNMaUIsUUFBSSxFQUFFVCxjQUREO0FBRUxSO0FBRkssR0FBUDtBQUlELENBTEQ7O0FBT0EsTUFBTWUsWUFBWSxHQUFJRyxLQUFELElBQVc7QUFDOUIsU0FBTztBQUNMRCxRQUFJLEVBQUVSLGNBREQ7QUFFTFM7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSxNQUFNaEMsTUFBTSxHQUFHLE1BQU07QUFDbkIsU0FBTztBQUNMK0IsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSkQ7O0FBTUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmbkMsT0FEZTtBQUVmQztBQUZlLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMS5yZWR1eF9hZ2Fpbi8uL0FwcC5qc3giLCJ3ZWJwYWNrOi8vMS5yZWR1eF9hZ2Fpbi8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IHsgbG9nSW4sIGxvZ091dCB9ID0gcmVxdWlyZShcIi4vYWN0aW9ucy91c2VyXCIpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hMb2dJbih7XG4gICAgICBpZDogXCJ6ZXJvY2hvXCIsXG4gICAgICBwYXNzd29yZDogXCLruYTrsIDrsojtmLhcIixcbiAgICB9KTtcbiAgfTtcblxuICBvbkxvZ291dCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoTG9nT3V0KGxvZ091dCgpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt1c2VyLmlzTG9nZ2luZ0luID8gKFxuICAgICAgICAgIDxkaXY+66Gc6re47J24IOykkTwvZGl2PlxuICAgICAgICApIDogdXNlci5kYXRhID8gKFxuICAgICAgICAgIDxkaXY+e3VzZXIuZGF0YS5uaWNrbmFtZX08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIuuhnOq3uOyduCDtlbTso7zshLjsmpRcIlxuICAgICAgICApfVxuXG4gICAgICAgIHshdXNlci5kYXRhID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrfT7roZzqt7jsnbg8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb2dvdXR9PuuhnOq3uOyVhOybgzwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyDsnbQg67Cp7Iud7J2EIOyCrOyaqe2VnOuLpOuptCwg7ZW064u5IO2VqOyImOqwgCDsi6TtlontlaAg65WM66eIIOumrOugjOuNlOungeuQmOyWtOyEnCDshLHriqXsg4Eg66y47KCc6rCAIOyDneq4uCDsiJgg7J6I7Ja0IHJlc2VsZWN066W8IOyCrOyaqe2VnOuLpC4gKO2bheyKpOydmCDqsr3smrDsl5DripQgcmVzc2VsZWN066W8IOyCrOyaqe2VoCDtlYTsmpTqsIAg7JeG64ukKVxuLy8g66as642V7IqkIHN0YXRl66W8IGNvbXBvbmVudCBwcm9wc+uhnCDrsJTqvrzri6RcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgcG9zdHM6IHN0YXRlLnBvc3RzLFxufSk7IC8vIHJlc2VsZWN0XG5cbi8vIOumrOuNleyKpCBkaXNwYXRjaOulvCBjb21wb25lbnQgcHJvcHProZwg67CU6r6864ukXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIC8vIGFjdGlvbiBsb2dpbiwgYWN0aW9uIGxvZ291dOqzvOuKlCDri6TrpbTri6QuIO2Xt+qwiOumrOuptCDslZ7sl5AgZGlzcGF0Y2jrpbwg67aZ7Jes7KSA64ukLlxuICAvLyBob29rc+uekSDruYTqtZDtlbTrs7TrqbQsIOydtOqxtCDtlZjrgpjroZwg66y27Jes7J6I7Ja07IScIOuwlOuAlCDrlYzrp4jri6Qg64uk6rCZ7J20IOuwlOq/lOykmOyVvOuQmOyngOunjCBob29rc+uKlCDrtoTrpqzrkJjslrQg7J6I7Ja07IScIOuwlOq+uSDtjrjtlZjri6RcbiAgZGlzcGF0Y2hMb2dJbjogKGRhdGEpID0+IGRpc3BhdGNoKGxvZ0luKGRhdGEpKSxcbiAgZGlzcGF0Y2hMb2dPdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ091dCgpKSxcbn0pO1xuXG4vLyBjb25uZWN0652864qUIGhpZ2gtb3JkZXIgY29tcG9uZW50LEFwcCBjb21wb2VubnTrpbwg7ZmV7J6l7ZWY64qUIGNvbm5lY3QgaGlnaHQgb3JkZXIgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuIiwiY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5jb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuLypcbiDruYTrj5nquLAg7JWh7IWYIOy7pOyKpO2FgFxuIOyWtOuWu+qyjCDrs7TrqbQg67mE64+Z6riwIOyymOumrOuPhCDriIjsho3snoTsnbTsl5DsmpQuIFxuIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw652864qUIOq4sOuKpeydhCDrr7jrk6Tsm6jslrTrpbwg7Ya17ZW0IOy2lOqwgO2VmOqzoFxuIOuPmeq4sCDtlZwg67KIIOu2gOultOqzoCDruYTrj5nquLDsnpHsl4XslYjsl5DshJwg64Gd64Kg7K+k7JeQIOuPmeq4sCDtlZzrsogg642UIOu2gOultOqzoFxuIOuPmeq4sCDslaHshZjrk6TqsITsl5Ag7Iuk7ZaJIOyInOyEnOulvCDsobDsnpHtlZjripQg7KCV64+E67CW7JeQIOyViCDrkJjripTqsbDsl5DsmpQuXG4qL1xuY29uc3QgbG9nSW4gPSAoZGF0YSkgPT4ge1xuICAvLyBhc3luYyBhY3Rpb24gY3JlYXRvclxuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIC8vYXN5bmMgYWN0aW9uXG4gICAgZGlzcGF0Y2gobG9nSW5SZXF1ZXN0KGRhdGEpKTtcblxuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8g7ISc67KE6rCAIOyXhuyWtOyEnFxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBsb2dpblN1Y2Nlc3Moe1xuICAgICAgICAgICAgdXNlcklkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiemVyb2Nob1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGRpc3BhdGNoKGxvZ0luRmFpbHVyZShlKSk7XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGxvZ0luUmVxdWVzdCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGxvZ0luRmFpbHVyZSA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgIGVycm9yLFxuICB9O1xufTtcblxuY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiTE9HX09VVFwiLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ0luLFxuICBsb2dPdXQsXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYThiYTkxMzY2MjRmYzhlNzhhOTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwibG9nSW4iLCJsb2dPdXQiLCJyZXF1aXJlIiwiQXBwIiwiQ29tcG9uZW50Iiwib25DbGljayIsInByb3BzIiwiZGlzcGF0Y2hMb2dJbiIsImlkIiwicGFzc3dvcmQiLCJvbkxvZ291dCIsImRpc3BhdGNoTG9nT3V0IiwicmVuZGVyIiwidXNlciIsImlzTG9nZ2luZ0luIiwiZGF0YSIsIm5pY2tuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwb3N0cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiZ2V0U3RhdGUiLCJsb2dJblJlcXVlc3QiLCJzZXRUaW1lb3V0IiwibG9naW5TdWNjZXNzIiwidXNlcklkIiwibG9nSW5GYWlsdXJlIiwiZSIsInR5cGUiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9