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

/*
  우리는 이전까지 action을 따로 분리해주어서 동기 액션, 비동기 액션을 몰아넣었는데
  이제부터(툴킷: createSlice 사용 이후) 비동기 액션의 공간이 될 

  동기 액션은 따로 공간이 필요없죠. 왜냐면, slice안의 reducer에 있을테니깐.
*/
const {
  createAsyncThunk
} = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});
/*
  thunk에서 쓰는 용어는 조금 다르다. 
  loading, success, failure => pending, fulfilled, rejected
 */


const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // #current line +1&2와 같이 사용하여 접근할 수 있음
  // const state = thunkAPI.getState();
  // state.user.data

  /*
  1. 서버가 있다는 가정
  data - 이메일이나, 비밀번호 있으면 서버로 보내서 응답으로 변수 result의 객체를 받는거든요. 
  {
    userId: 1,
    nickname: "zerocho",
  }
   2. await를 사용할 때, try~catch문을 사용하락 했는데 여기  thunk에서는 사용하지말아라. 왜냐하면, error가 나지 않아서 fullfilled 상태가 되기 때문이다.
  error가 나야지 rejected상태로 간다.
   3. data는 App.jsx의 dispatch(logIn({data}))에서 온 것!
   4. data에서 아이디와 비밀번호가 있어서 서버로 보내면, 서버가 응답(mocking)을 {data}로 와서 fullfied로 전달된다.
   5. 3단계를 reducer에서는 어떻게 처리하는가?
   6.  { userId: 1, nickname: "zerocho" }가 리듀서(user)에서 action.payload가 된다.
  */
  console.log(data);
  logIn.result = await delay(500, {
    userId: 1,
    nickname: "zerocho"
  });
  return result;
}); // module.exports = {
//   logIn,
// };

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
/******/ 	__webpack_require__.h = () => ("a49991e01d4497832a78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMGI1ZjNjNi1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQXVCQyxtQkFBTyxDQUFDLG1GQUFELENBQXBDOztBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDWixJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CQyxZQUFVLENBQUMsTUFBTTtBQUNmRixXQUFPLENBQUNGLEtBQUQsQ0FBUDtBQUNELEdBRlMsRUFFUEQsSUFGTyxDQUFWO0FBR0QsQ0FKRCxDQURGO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLEtBQUssR0FBR1QsZ0JBQWdCLENBQUMsWUFBRCxFQUFlLE9BQU9VLElBQVAsRUFBYUMsUUFBYixLQUEwQjtBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBRCxPQUFLLENBQUNLLE1BQU4sR0FBZSxNQUFNWixLQUFLLENBQUMsR0FBRCxFQUFNO0FBQzlCYSxVQUFNLEVBQUUsQ0FEc0I7QUFFOUJDLFlBQVEsRUFBRTtBQUZvQixHQUFOLENBQTFCO0FBSUEsU0FBT0YsTUFBUDtBQUNELENBaEM2QixDQUE5QixFQWtDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xLnJlZHV4X2FnYWluLy4vYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLzEucmVkdXhfYWdhaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIOyasOumrOuKlCDsnbTsoITquYzsp4AgYWN0aW9u7J2EIOuUsOuhnCDrtoTrpqztlbTso7zslrTshJwg64+Z6riwIOyVoeyFmCwg67mE64+Z6riwIOyVoeyFmOydhCDrqrDslYTrhKPsl4jripTrjbBcbiAg7J207KCc67aA7YSwKO2ItO2CtzogY3JlYXRlU2xpY2Ug7IKs7JqpIOydtO2bhCkg67mE64+Z6riwIOyVoeyFmOydmCDqs7XqsITsnbQg65CgIFxuXG4gIOuPmeq4sCDslaHshZjsnYAg65Sw66GcIOqzteqwhOydtCDtlYTsmpTsl4bso6AuIOyZnOuDkOuptCwgc2xpY2XslYjsnZggcmVkdWNlcuyXkCDsnojsnYTthYzri4jquZAuXG4qL1xuXG5jb25zdCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpO1xuXG5jb25zdCBkZWxheSA9ICh0aW1lLCB2YWx1ZSkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSwgdGltZSk7XG4gIH0pO1xuXG4vKlxuICB0aHVua+yXkOyEnCDsk7DripQg7Jqp7Ja064qUIOyhsOq4iCDri6TrpbTri6QuIFxuICBsb2FkaW5nLCBzdWNjZXNzLCBmYWlsdXJlID0+IHBlbmRpbmcsIGZ1bGZpbGxlZCwgcmVqZWN0ZWRcbiAqL1xuY29uc3QgbG9nSW4gPSBjcmVhdGVBc3luY1RodW5rKFwidXNlci9sb2dJblwiLCBhc3luYyAoZGF0YSwgdGh1bmtBUEkpID0+IHtcbiAgLy8gI2N1cnJlbnQgbGluZSArMSYy7JmAIOqwmeydtCDsgqzsmqntlZjsl6wg7KCR6re87ZWgIOyImCDsnojsnYxcbiAgLy8gY29uc3Qgc3RhdGUgPSB0aHVua0FQSS5nZXRTdGF0ZSgpO1xuICAvLyBzdGF0ZS51c2VyLmRhdGFcblxuICAvKlxuICAxLiDshJzrsoTqsIAg7J6I64uk64qUIOqwgOyglVxuICBkYXRhIC0g7J2066mU7J287J2064KYLCDruYTrsIDrsojtmLgg7J6I7Jy866m0IOyEnOuyhOuhnCDrs7TrgrTshJwg7J2R64u17Jy866GcIOuzgOyImCByZXN1bHTsnZgg6rCd7LK066W8IOuwm+uKlOqxsOuToOyalC4gXG4gIHtcbiAgICB1c2VySWQ6IDEsXG4gICAgbmlja25hbWU6IFwiemVyb2Nob1wiLFxuICB9XG5cbiAgMi4gYXdhaXTrpbwg7IKs7Jqp7ZWgIOuVjCwgdHJ5fmNhdGNo66y47J2EIOyCrOyaqe2VmOudvSDtlojripTrjbAg7Jes6riwICB0aHVua+yXkOyEnOuKlCDsgqzsmqntlZjsp4Drp5DslYTrnbwuIOyZnOuDkO2VmOuptCwgZXJyb3LqsIAg64KY7KeAIOyViuyVhOyEnCBmdWxsZmlsbGVkIOyDge2DnOqwgCDrkJjquLAg65WM66y47J2064ukLlxuICBlcnJvcuqwgCDrgpjslbzsp4AgcmVqZWN0ZWTsg4Htg5zroZwg6rCE64ukLlxuXG4gIDMuIGRhdGHripQgQXBwLmpzeOydmCBkaXNwYXRjaChsb2dJbih7ZGF0YX0pKeyXkOyEnCDsmKgg6rKDIVxuXG4gIDQuIGRhdGHsl5DshJwg7JWE7J2065SU7JmAIOu5hOuwgOuyiO2YuOqwgCDsnojslrTshJwg7ISc67KE66GcIOuztOuCtOuptCwg7ISc67KE6rCAIOydkeuLtShtb2NraW5nKeydhCB7ZGF0YX3roZwg7JmA7IScIGZ1bGxmaWVk66GcIOyghOuLrOuQnOuLpC5cblxuICA1LiAz64uo6rOE66W8IHJlZHVjZXLsl5DshJzripQg7Ja065a76rKMIOyymOumrO2VmOuKlOqwgD9cblxuICA2LiAgeyB1c2VySWQ6IDEsIG5pY2tuYW1lOiBcInplcm9jaG9cIiB96rCAIOumrOuTgOyEnCh1c2VyKeyXkOyEnCBhY3Rpb24ucGF5bG9hZOqwgCDrkJzri6QuXG5cbiovXG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGxvZ0luLnJlc3VsdCA9IGF3YWl0IGRlbGF5KDUwMCwge1xuICAgIHVzZXJJZDogMSxcbiAgICBuaWNrbmFtZTogXCJ6ZXJvY2hvXCIsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuLy8gICBsb2dJbixcbi8vIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNDk5OTFlMDFkNDQ5NzgzMmE3OFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwicmVxdWlyZSIsImRlbGF5IiwidGltZSIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwibG9nSW4iLCJkYXRhIiwidGh1bmtBUEkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidXNlcklkIiwibmlja25hbWUiXSwic291cmNlUm9vdCI6IiJ9