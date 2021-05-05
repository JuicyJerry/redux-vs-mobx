const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: true,
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
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);
// store.subscribe(() => {
//   // react-redux 안에 들어있어요.
//   console.log("changed"); // 화면 바꿔주는 코드 여기서
// });

// ---------------------------
// 위에는 미리 만들어야 하는 것이고 밑에는 리액트에서 실행되는 부분

store.dispatch(
  // 비동기 액션 크리에이터가 됨!
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);
console.log("3: ", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요. 리덕스",
//   })
// );
// console.log("4: ", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 2,
//     content: "두번째 리덕스",
//   })
// );
// console.log("5: ", store.getState());

// store.dispatch(logOut({}));
// console.log("6: ", store.getState());

// console.log("7: ", store);
