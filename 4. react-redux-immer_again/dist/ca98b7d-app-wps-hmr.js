self["webpackHotUpdate_1_redux_again"]("app",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

const {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
} = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
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
/******/ 	__webpack_require__.h = () => ("39b7a44159d1f36084f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2E5OGI3ZC1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTTtBQUNKQSxnQkFESTtBQUVKQyxnQkFGSTtBQUdKQztBQUhJLElBSUZDLG1CQUFPLENBQUMsNENBQUQsQ0FKWDtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLElBQUQsSUFBVTtBQUN0QjtBQUNBLFNBQU8sQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEtBQXdCO0FBQzdCO0FBQ0FELFlBQVEsQ0FBQ0UsWUFBWSxDQUFDSCxJQUFELENBQWIsQ0FBUjs7QUFFQSxRQUFJO0FBQ0ZJLGdCQUFVLENBQUMsTUFBTTtBQUNmO0FBQ0FILGdCQUFRLENBQ05JLFlBQVksQ0FBQztBQUNYQyxnQkFBTSxFQUFFLENBREc7QUFFWEMsa0JBQVEsRUFBRTtBQUZDLFNBQUQsQ0FETixDQUFSO0FBTUQsT0FSUyxFQVFQLElBUk8sQ0FBVjtBQVNELEtBVkQsQ0FVRSxNQUFNO0FBQ05OLGNBQVEsQ0FBQ08sWUFBWSxDQUFDQyxDQUFELENBQWIsQ0FBUjtBQUNEO0FBQ0YsR0FqQkQ7QUFrQkQsQ0FwQkQ7O0FBcUJBLE1BQU1OLFlBQVksR0FBSUgsSUFBRCxJQUFVO0FBQzdCLFNBQU87QUFDTFUsUUFBSSxFQUFFZixjQUREO0FBRUxLO0FBRkssR0FBUDtBQUlELENBTEQ7O0FBT0EsTUFBTUssWUFBWSxHQUFJTCxJQUFELElBQVU7QUFDN0IsU0FBTztBQUNMVSxRQUFJLEVBQUVkLGNBREQ7QUFFTEk7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSxNQUFNUSxZQUFZLEdBQUlHLEtBQUQsSUFBVztBQUM5QixTQUFPO0FBQ0xELFFBQUksRUFBRWIsY0FERDtBQUVMYztBQUZLLEdBQVA7QUFJRCxDQUxEOztBQU9BLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFNBQU87QUFDTEYsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSkQ7O0FBTUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmZixPQURlO0FBRWZhO0FBRmUsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluLy4vYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLzEucmVkdXhfYWdhaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbn0gPSByZXF1aXJlKFwiLi4vcmVkdWNlcnMvdXNlclwiKTtcblxuLypcbiDruYTrj5nquLAg7JWh7IWYIOy7pOyKpO2FgFxuIOyWtOuWu+qyjCDrs7TrqbQg67mE64+Z6riwIOyymOumrOuPhCDriIjsho3snoTsnbTsl5DsmpQuIFxuIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw652864qUIOq4sOuKpeydhCDrr7jrk6Tsm6jslrTrpbwg7Ya17ZW0IOy2lOqwgO2VmOqzoFxuIOuPmeq4sCDtlZwg67KIIOu2gOultOqzoCDruYTrj5nquLDsnpHsl4XslYjsl5DshJwg64Gd64Kg7K+k7JeQIOuPmeq4sCDtlZzrsogg642UIOu2gOultOqzoFxuIOuPmeq4sCDslaHshZjrk6TqsITsl5Ag7Iuk7ZaJIOyInOyEnOulvCDsobDsnpHtlZjripQg7KCV64+E67CW7JeQIOyViCDrkJjripTqsbDsl5DsmpQuXG4qL1xuY29uc3QgbG9nSW4gPSAoZGF0YSkgPT4ge1xuICAvLyBhc3luYyBhY3Rpb24gY3JlYXRvclxuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIC8vYXN5bmMgYWN0aW9uXG4gICAgZGlzcGF0Y2gobG9nSW5SZXF1ZXN0KGRhdGEpKTtcblxuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8g7ISc67KE6rCAIOyXhuyWtOyEnFxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBsb2dpblN1Y2Nlc3Moe1xuICAgICAgICAgICAgdXNlcklkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiemVyb2Nob1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGRpc3BhdGNoKGxvZ0luRmFpbHVyZShlKSk7XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGxvZ0luUmVxdWVzdCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGxvZ2luU3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGxvZ0luRmFpbHVyZSA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgIGVycm9yLFxuICB9O1xufTtcblxuY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiTE9HX09VVFwiLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ0luLFxuICBsb2dPdXQsXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzliN2E0NDE1OWQxZjM2MDg0ZjZcIikiXSwibmFtZXMiOlsiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwicmVxdWlyZSIsImxvZ0luIiwiZGF0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dJblJlcXVlc3QiLCJzZXRUaW1lb3V0IiwibG9naW5TdWNjZXNzIiwidXNlcklkIiwibmlja25hbWUiLCJsb2dJbkZhaWx1cmUiLCJlIiwidHlwZSIsImVycm9yIiwibG9nT3V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=