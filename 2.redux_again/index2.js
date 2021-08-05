//! 데이터 중심 사고를 해야한다! (화면은 안 중요해요. 리덕스의 장점이 데이터가 바뀌면 알아서 바뀌는거잖아요 )
const { createStore, applyMiddleware, compose } = require("redux");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

// 데이터가 폴더를 나누는 기준이 된다. 그래서 리덕스 할 때 이 구조를 잘 잡는게 중요하다.
const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

// 기능 증강 : enhancer
// 함수 합성 함수 : compose (combineReducer랑 비슷?)

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅:", action);
  // 기능 추가
  dispatch(action);
  // 기능 추가
};
/*
  위 구문과 동일함
  function firstMiddleware() {
    return function (next) {
      return function (action) {};
    };
  }
*/

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기를 구별해주기 위해, 비동기인 경우에는 액션을 함수로 만들어주겠다 라는 썽크에서의 약속
    // 객체가 현재 동기적으로 동작하고 있고 객체로도 비동기처리를 할수 있긴하다고 한다.

    return action(store.dispatch, store.getState); // 얘네들은 어디에 전달되냐?
  }
  return dispatch(action);
};

// const enhancer = compose(applyMiddleware());
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

// View(화면은 언제 바뀌어요): 아래 subscribe가 react-redux안에 들어있어서 따로 써줄필요없다.
store.subscribe(() => {
  console.log("changed"); // 화면을 바꿔주는 코드는 여기서!
});

store.dispatch(
  logIn({
    id: 1,
    name: "jay",
    admin: true,
  })
);

console.log("3rd: ", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);

console.log("4rd: ", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두 번째. 리덕스",
  })
);

console.log("5rd: ", store.getState());

store.dispatch(logOut());
console.log("6rd: ", store.getState());
