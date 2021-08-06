self["webpackHotUpdate_1_redux_again"]("app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

const initialState = {
  isLoggingIn: false,
  data: null
};

const produce = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT = "LOG_OUT"; // nextState = produce(prevState, (draft) => {}); // immer의 기본 꼴, produce 함수는 이전 state 바탕으로 action 적용해 다음 state를 만든다.

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      /*
      state.data = null;
      state.deep.deeper.deepest.a = 'b'; 이걸 쓰려고 하는데 불변성을 지키려고
      {
        ...prevState,
        data: null,
        deep: {
          ...prevState.deep,
          deeper: {
            ...prevState.deeper,
            deepest: {
              ...prevState.deepest,
              a: 'b'
            }
          }
        }
      }
         => 이걸 편하게 해주려고 immer 라이브러리를 사용한다.
      */
      case LOG_IN_REQUEST:
        draft.data = null, draft.isLoggingIn = true;
        break;
      // return {
      //   ...prevState,
      //   isLoggingIn: true,
      // };

      case LOG_IN_SUCCESS:
        draft.data = action.data, draft.isLoggingIn = false;
        break;
      // return {
      //   ...prevState,
      //   data: action.data,
      //   isLoggingIn: false,
      // };

      case LOG_IN_FAILURE:
        draft.data = null, draft.isLoggingIn = false;
        break;
      // return {
      //   ...prevState,
      //   data: null,
      //   isLoggingIn: true,
      // };

      case LOG_OUT:
        draft.data = null, draft.isLoggingIn = false;
        break;
      // return {
      //   ...prevState,
      //   data: null,
      //   isLoggingIn: false,
      // };

      default:
        break;
    }
  });
};

module.exports = userReducer;

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
/******/ 	__webpack_require__.h = () => ("4e84c4ce24a1c21a1a49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGMyODhkYy1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0FBQUVDLGFBQVcsRUFBRSxLQUFmO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FBckI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQXZCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQixFQUVBOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxTQUFTLEdBQUdWLFlBQWIsRUFBMkJXLE1BQTNCLEtBQXNDO0FBQ3hELFNBQU9SLE9BQU8sQ0FBQ08sU0FBRCxFQUFhRSxLQUFELElBQVc7QUFDbkMsWUFBUUQsTUFBTSxDQUFDRSxJQUFmO0FBQ0U7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTSxXQUFLUixjQUFMO0FBQ0dPLGFBQUssQ0FBQ1YsSUFBTixHQUFhLElBQWQsRUFBc0JVLEtBQUssQ0FBQ1gsV0FBTixHQUFvQixJQUExQztBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBS0ssY0FBTDtBQUNHTSxhQUFLLENBQUNWLElBQU4sR0FBYVMsTUFBTSxDQUFDVCxJQUFyQixFQUE2QlUsS0FBSyxDQUFDWCxXQUFOLEdBQW9CLEtBQWpEO0FBQ0E7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUtNLGNBQUw7QUFDR0ssYUFBSyxDQUFDVixJQUFOLEdBQWEsSUFBZCxFQUFzQlUsS0FBSyxDQUFDWCxXQUFOLEdBQW9CLEtBQTFDO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUtPLE9BQUw7QUFDR0ksYUFBSyxDQUFDVixJQUFOLEdBQWEsSUFBZCxFQUFzQlUsS0FBSyxDQUFDWCxXQUFOLEdBQW9CLEtBQTFDO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0U7QUF2REo7QUF5REQsR0ExRGEsQ0FBZDtBQTJERCxDQTVERDs7QUE4REFhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sV0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7IGlzTG9nZ2luZ0luOiBmYWxzZSwgZGF0YTogbnVsbCB9O1xuY29uc3QgcHJvZHVjZSA9IHJlcXVpcmUoXCJpbW1lclwiKTtcblxuY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5jb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuY29uc3QgTE9HX09VVCA9IFwiTE9HX09VVFwiO1xuXG4vLyBuZXh0U3RhdGUgPSBwcm9kdWNlKHByZXZTdGF0ZSwgKGRyYWZ0KSA9PiB7fSk7IC8vIGltbWVy7J2YIOq4sOuzuCDqvLQsIHByb2R1Y2Ug7ZWo7IiY64qUIOydtOyghCBzdGF0ZSDrsJTtg5XsnLzroZwgYWN0aW9uIOyggeyaqe2VtCDri6TsnYwgc3RhdGXrpbwg66eM65Og64ukLlxuXG5jb25zdCB1c2VyUmVkdWNlciA9IChwcmV2U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShwcmV2U3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIC8qXG4gICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICAgIHN0YXRlLmRlZXAuZGVlcGVyLmRlZXBlc3QuYSA9ICdiJzsg7J206rG4IOyTsOugpOqzoCDtlZjripTrjbAg67aI67OA7ISx7J2EIOyngO2CpOugpOqzoFxuICAgICAge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGRlZXA6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZGVlcCxcbiAgICAgICAgICBkZWVwZXI6IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5kZWVwZXIsXG4gICAgICAgICAgICBkZWVwZXN0OiB7XG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5kZWVwZXN0LFxuICAgICAgICAgICAgICBhOiAnYidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICA9PiDsnbTqsbgg7Y647ZWY6rKMIO2VtOyjvOugpOqzoCBpbW1lciDrnbzsnbTruIzrn6zrpqzrpbwg7IKs7Jqp7ZWc64ukLlxuICAqL1xuXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICAoZHJhZnQuZGF0YSA9IG51bGwpLCAoZHJhZnQuaXNMb2dnaW5nSW4gPSB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyByZXR1cm4ge1xuICAgICAgLy8gICAuLi5wcmV2U3RhdGUsXG4gICAgICAvLyAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgLy8gfTtcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIChkcmFmdC5kYXRhID0gYWN0aW9uLmRhdGEpLCAoZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyByZXR1cm4ge1xuICAgICAgLy8gICAuLi5wcmV2U3RhdGUsXG4gICAgICAvLyAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgLy8gICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAvLyB9O1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgKGRyYWZ0LmRhdGEgPSBudWxsKSwgKGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHJldHVybiB7XG4gICAgICAvLyAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIC8vICAgZGF0YTogbnVsbCxcbiAgICAgIC8vICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAvLyB9O1xuICAgICAgY2FzZSBMT0dfT1VUOlxuICAgICAgICAoZHJhZnQuZGF0YSA9IG51bGwpLCAoZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gcmV0dXJuIHtcbiAgICAgIC8vICAgLi4ucHJldlN0YXRlLFxuICAgICAgLy8gICBkYXRhOiBudWxsLFxuICAgICAgLy8gICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAvLyB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlclJlZHVjZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZTg0YzRjZTI0YTFjMjFhMWE0OVwiKSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImRhdGEiLCJwcm9kdWNlIiwicmVxdWlyZSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVQiLCJ1c2VyUmVkdWNlciIsInByZXZTdGF0ZSIsImFjdGlvbiIsImRyYWZ0IiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9