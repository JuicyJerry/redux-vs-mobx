//! 데이터 중심 사고를 해야한다! (화면은 안 중요해요. 리덕스의 장점이 데이터가 바뀌면 알아서 바뀌는거잖아요 )
const { createStore, applyMiddleware, compose } = require("redux");
const reducer = require("./reducers");
const { composeWithDevTools } = require("redux-devtools-extension");

// 데이터가 폴더를 나누는 기준이 된다. 그래서 리덕스 할 때 이 구조를 잘 잡는게 중요하다.
const initialState = {
  user: {
    isLoggingIn: false,
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

// 미들웨어는 이런모양(커링방식: 확장성이 뛰어난 방식, 중간 중간에 끼워넣을 수 있다.)이라고 약속했기 때문에 이 형태를 지켜줘야함
// 3단함수가 미들웨어다. 리덕스가 함수형 프로그래밍 영향을 많이 받은 것을 볼 수 있다.
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

// 액션은 객체고 동기적인 기능밖에 못하는데, 로그인이나 로그아웃, 회원가입 같은 서버를 거치는 작업을 하는데
// 액션을 동기 작업은 액션을 객체로 디스패치하겠고 비동기 작업을 함수로 디스패치 해줄게 그럼 썽크너가 실행해죠 (약속함)

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기를 구별해주기 위해, 비동기인 경우에는 액션을 함수로 만들어주겠다 라는 썽크에서의 약속
    // 객체가 현재 동기적으로 동작하고 있고 객체로도 비동기처리를 할수 있긴하다고 한다.

    return action(store.dispatch, store.getState); // 얘네들은 어디에 전달되냐? -> action으로!
  }
  return dispatch(action);
};

// const enhancer = compose(applyMiddleware());
// 함수 합성 함수 : compose (combineReducer랑 비슷?)
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
