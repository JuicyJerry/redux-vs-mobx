const { createStore } = require("redux");
const reducer = require("./reducers/reducer");
const { logIn, logOut, addPost } = require("./actions/action");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있어요.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

// ---------------------------
// 위에는 미리 만들어야 하는 것이고 밑에는 리액트에서 실행되는 부분

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);
console.log("3: ", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);
console.log("4: ", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스",
  })
);
console.log("5: ", store.getState());

store.dispatch(logOut({}));
console.log("6: ", store.getState());

console.log("7: ", store);
