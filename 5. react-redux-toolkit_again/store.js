//! 데이터 중심 사고를 해야한다! (화면은 안 중요해요. 리덕스의 장점이 데이터가 바뀌면 알아서 바뀌는거잖아요 )
const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

// custom middleware
const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅:", action);
  dispatch(action); // dispatch 대신 next라고도 쓰는거 같음
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()], // 이렇게만 넣으면 기존에 toolkit이 갖고 있던 thunk까지 사라져서, getDefaultMiddleware를 사용해야한다
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState, // 이건 initialState와 동일한 역할을 하는데, 나중에 ssr에 initialstate가 올 때 사용한다
});

module.exports = store;
