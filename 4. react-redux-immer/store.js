const { createStore, applyMiddleware, compose } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

// 3단 고차함수, 아래 코드와 동일하다

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅: ", action); // 기능 추가

  dispatch(action); // 기본 기능, 기능 추가할 수 있는 공간이 dispatch 전후로 생김

  // console.log("액션 끝");
};

// 실행되는 시점에 따른 차이
// function firstMiddleware(store) {
//   return function (next) {
//     return function (action) {};
//   };
// }

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action); // 기본 액션, 리턴 있어도 없어도 됨
};

// compose가 합성해주는 함수
// const enhancer = compose(applyMiddleware(), devtool);
// 나중에 배포할 때, devtools를 사용하기 싫다면,
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
