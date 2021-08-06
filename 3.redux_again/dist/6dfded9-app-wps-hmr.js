self["webpackHotUpdate_1_redux_again"]("app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

//! 데이터 중심 사고를 해야한다! (화면은 안 중요해요. 리덕스의 장점이 데이터가 바뀌면 알아서 바뀌는거잖아요 )
const {
  createStore,
  applyMiddleware,
  compose
} = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

const reducer = __webpack_require__(/*! ./reducers */ "./reducers/index.js");

const {
  composeWithDevTools
} = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js"); // 데이터가 폴더를 나누는 기준이 된다. 그래서 리덕스 할 때 이 구조를 잘 잡는게 중요하다.


const initialState = {
  user: {
    isLoggingIn: false,
    data: null
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: []
}; // 기능 증강 : enhancer
// 미들웨어는 이런모양(커링방식: 확장성이 뛰어난 방식, 중간 중간에 끼워넣을 수 있다.)이라고 약속했기 때문에 이 형태를 지켜줘야함
// 3단함수가 미들웨어다. 리덕스가 함수형 프로그래밍 영향을 많이 받은 것을 볼 수 있다.

const firstMiddleware = store => dispatch => action => {
  console.log("로깅:", action); // 기능 추가

  dispatch(action); // 기능 추가
};
/*
  위 구문과 동일함
  function firstMiddleware() {
    return function (next) {
      return function (action) {};
    };
  }
*/
// 액션은 객체고 동기적인 기능밖에 못하는데, 로그인이나 로그아웃, 회원가입 같은 서버를 거치는 작업을 하는데
// 액션을 동기 작업은 액션을 객체로 디스패치하겠고 비동기 작업을 함수로 디스패치 해줄게 그럼 썽크너가 실행해죠 (약속함)


const thunkMiddleware = store => dispatch => action => {
  if (typeof action === "function") {
    // 비동기를 구별해주기 위해, 비동기인 경우에는 액션을 함수로 만들어주겠다 라는 썽크에서의 약속
    // 객체가 현재 동기적으로 동작하고 있고 객체로도 비동기처리를 할수 있긴하다고 한다.
    return action(store.dispatch, store.getState); // 얘네들은 어디에 전달되냐? -> action으로!
  }

  return dispatch(action);
}; // const enhancer = compose(applyMiddleware());
// 함수 합성 함수 : compose (combineReducer랑 비슷?)


const enhancer =  false ? 0 : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));
const store = createStore(reducer, initialState, enhancer);
module.exports = store;

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
/******/ 	__webpack_require__.h = () => ("60032b6130e7b503b4a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNmRmZGVkOS1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNO0FBQUVBLGFBQUY7QUFBZUMsaUJBQWY7QUFBZ0NDO0FBQWhDLElBQTRDQyxtQkFBTyxDQUFDLCtDQUFELENBQXpEOztBQUNBLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyx1Q0FBRCxDQUF2Qjs7QUFDQSxNQUFNO0FBQUVFO0FBQUYsSUFBMEJGLG1CQUFPLENBQUMsa0ZBQUQsQ0FBdkMsRUFFQTs7O0FBQ0EsTUFBTUcsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUU7QUFDSkMsZUFBVyxFQUFFLEtBRFQ7QUFFSkMsUUFBSSxFQUFFO0FBRkYsR0FEYTtBQUtuQkMsT0FBSyxFQUFFLEVBTFk7QUFNbkJDLFVBQVEsRUFBRSxFQU5TO0FBT25CQyxXQUFTLEVBQUUsRUFQUTtBQVFuQkMsU0FBTyxFQUFFLEVBUlU7QUFTbkJDLE9BQUssRUFBRSxFQVRZO0FBVW5CQyxXQUFTLEVBQUU7QUFWUSxDQUFyQixFQWFBO0FBRUE7QUFDQTs7QUFDQSxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsSUFBWUMsUUFBRCxJQUFlQyxNQUFELElBQVk7QUFDM0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLE1BQW5CLEVBRDJELENBRTNEOztBQUNBRCxVQUFRLENBQUNDLE1BQUQsQ0FBUixDQUgyRCxDQUkzRDtBQUNELENBTEQ7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsTUFBTUcsZUFBZSxHQUFJTCxLQUFELElBQVlDLFFBQUQsSUFBZUMsTUFBRCxJQUFZO0FBQzNELE1BQUksT0FBT0EsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQztBQUNBO0FBRUEsV0FBT0EsTUFBTSxDQUFDRixLQUFLLENBQUNDLFFBQVAsRUFBaUJELEtBQUssQ0FBQ00sUUFBdkIsQ0FBYixDQUpnQyxDQUllO0FBQ2hEOztBQUNELFNBQU9MLFFBQVEsQ0FBQ0MsTUFBRCxDQUFmO0FBQ0QsQ0FSRCxFQVVBO0FBQ0E7OztBQUNBLE1BQU1LLFFBQVEsR0FDWkMsTUFBQSxHQUNJdkIsQ0FESixHQUVJRyxtQkFBbUIsQ0FBQ0osZUFBZSxDQUFDZSxlQUFELEVBQWtCTSxlQUFsQixDQUFoQixDQUh6QjtBQUtBLE1BQU1MLEtBQUssR0FBR2pCLFdBQVcsQ0FBQ0ksT0FBRCxFQUFVRSxZQUFWLEVBQXdCa0IsUUFBeEIsQ0FBekI7QUFFQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixLQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSIsInNvdXJjZXMiOlsid2VicGFjazovLzEucmVkdXhfYWdhaW4vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEg642w7J207YSwIOykkeyLrCDsgqzqs6Drpbwg7ZW07JW87ZWc64ukISAo7ZmU66m07J2AIOyViCDspJHsmpTtlbTsmpQuIOumrOuNleyKpOydmCDsnqXsoJDsnbQg642w7J207YSw6rCAIOuwlOuAjOuptCDslYzslYTshJwg67CU64CM64qU6rGw7J6W7JWE7JqUIClcbmNvbnN0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9ID0gcmVxdWlyZShcInJlZHV4XCIpO1xuY29uc3QgcmVkdWNlciA9IHJlcXVpcmUoXCIuL3JlZHVjZXJzXCIpO1xuY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpO1xuXG4vLyDrjbDsnbTthLDqsIAg7Y+0642U66W8IOuCmOuIhOuKlCDquLDspIDsnbQg65Cc64ukLiDqt7jrnpjshJwg66as642V7IqkIO2VoCDrlYwg7J20IOq1rOyhsOulvCDsnpgg7J6h64qU6rKMIOykkeyalO2VmOuLpC5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge1xuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgICBkYXRhOiBudWxsLFxuICB9LFxuICBwb3N0czogW10sXG4gIGNvbW1lbnRzOiBbXSxcbiAgZmF2b3JpdGVzOiBbXSxcbiAgaGlzdG9yeTogW10sXG4gIGxpa2VzOiBbXSxcbiAgZm9sbG93ZXJzOiBbXSxcbn07XG5cbi8vIOq4sOuKpSDspp3qsJUgOiBlbmhhbmNlclxuXG4vLyDrr7jrk6Tsm6jslrTripQg7J2065+w66qo7JaRKOy7pOungeuwqeyLnTog7ZmV7J6l7ISx7J20IOubsOyWtOuCnCDrsKnsi50sIOykkeqwhCDspJHqsITsl5Ag64G87JuM64Sj7J2EIOyImCDsnojri6QuKeydtOudvOqzoCDslb3sho3tlojquLAg65WM66y47JeQIOydtCDtmJXtg5zrpbwg7KeA7Lyc7KSY7JW87ZWoXG4vLyAz64uo7ZWo7IiY6rCAIOuvuOuTpOybqOyWtOuLpC4g66as642V7Iqk6rCAIO2VqOyImO2YlSDtlITroZzqt7jrnpjrsI0g7JiB7Zal7J2EIOunjuydtCDrsJvsnYAg6rKD7J2EIOuzvCDsiJgg7J6I64ukLlxuY29uc3QgZmlyc3RNaWRkbGV3YXJlID0gKHN0b3JlKSA9PiAoZGlzcGF0Y2gpID0+IChhY3Rpb24pID0+IHtcbiAgY29uc29sZS5sb2coXCLroZzquYU6XCIsIGFjdGlvbik7XG4gIC8vIOq4sOuKpSDstpTqsIBcbiAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgLy8g6riw64qlIOy2lOqwgFxufTtcbi8qXG4gIOychCDqtazrrLjqs7wg64+Z7J287ZWoXG4gIGZ1bmN0aW9uIGZpcnN0TWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7fTtcbiAgICB9O1xuICB9XG4qL1xuXG4vLyDslaHshZjsnYAg6rCd7LK06rOgIOuPmeq4sOyggeyduCDquLDriqXrsJbsl5Ag66q77ZWY64qU642wLCDroZzqt7jsnbjsnbTrgpgg66Gc6re47JWE7JuDLCDtmozsm5DqsIDsnoUg6rCZ7J2AIOyEnOuyhOulvCDqsbDsuZjripQg7J6R7JeF7J2EIO2VmOuKlOuNsFxuLy8g7JWh7IWY7J2EIOuPmeq4sCDsnpHsl4XsnYAg7JWh7IWY7J2EIOqwneyytOuhnCDrlJTsiqTtjKjsuZjtlZjqsqDqs6Ag67mE64+Z6riwIOyekeyXheydhCDtlajsiJjroZwg65SU7Iqk7Yyo7LmYIO2VtOykhOqyjCDqt7jrn7wg7I297YGs64SI6rCAIOyLpO2Wie2VtOyjoCAo7JW97IaN7ZWoKVxuXG5jb25zdCB0aHVua01pZGRsZXdhcmUgPSAoc3RvcmUpID0+IChkaXNwYXRjaCkgPT4gKGFjdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8g67mE64+Z6riw66W8IOq1rOuzhO2VtOyjvOq4sCDsnITtlbQsIOu5hOuPmeq4sOyduCDqsr3smrDsl5DripQg7JWh7IWY7J2EIO2VqOyImOuhnCDrp4zrk6TslrTso7zqsqDri6Qg652864qUIOyNve2BrOyXkOyEnOydmCDslb3sho1cbiAgICAvLyDqsJ3ssrTqsIAg7ZiE7J6sIOuPmeq4sOyggeycvOuhnCDrj5nsnpHtlZjqs6Ag7J6I6rOgIOqwneyytOuhnOuPhCDruYTrj5nquLDsspjrpqzrpbwg7ZWg7IiYIOyeiOq4tO2VmOuLpOqzoCDtlZzri6QuXG5cbiAgICByZXR1cm4gYWN0aW9uKHN0b3JlLmRpc3BhdGNoLCBzdG9yZS5nZXRTdGF0ZSk7IC8vIOyWmOuEpOuTpOydgCDslrTrlJTsl5Ag7KCE64us65CY64OQPyAtPiBhY3Rpb27snLzroZwhXG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbik7XG59O1xuXG4vLyBjb25zdCBlbmhhbmNlciA9IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKCkpO1xuLy8g7ZWo7IiYIO2VqeyEsSDtlajsiJggOiBjb21wb3NlIChjb21iaW5lUmVkdWNlcuuekSDruYTsirc/KVxuY29uc3QgZW5oYW5jZXIgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKGZpcnN0TWlkZGxld2FyZSwgdGh1bmtNaWRkbGV3YXJlKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKGZpcnN0TWlkZGxld2FyZSwgdGh1bmtNaWRkbGV3YXJlKSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MDAzMmI2MTMwZTdiNTAzYjRhMVwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJyZXF1aXJlIiwicmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnaW5nSW4iLCJkYXRhIiwicG9zdHMiLCJjb21tZW50cyIsImZhdm9yaXRlcyIsImhpc3RvcnkiLCJsaWtlcyIsImZvbGxvd2VycyIsImZpcnN0TWlkZGxld2FyZSIsInN0b3JlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidGh1bmtNaWRkbGV3YXJlIiwiZ2V0U3RhdGUiLCJlbmhhbmNlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9