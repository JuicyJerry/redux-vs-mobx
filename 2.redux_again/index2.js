//! 데이터 중심 사고를 해야한다! (화면은 안 중요해요. 리덕스의 장점이 데이터가 바뀌면 알아서 바뀌는거잖아요 )
const { createStore } = require("redux");
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

const store = createStore(reducer, {
  initialState,
});

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
