const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        post: [...prevState.posts, action.data],
      };
    default:
      // default가 필요한 이유는 case에 해당되지 않는 것이 들어왔을 경우를 위해서 (ex. 오타)
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

// const nextState = {
//   ...initialState,
//   posts: [action.data],
// };

// const nextState = {
//   ...initialState,
//   posts: [...initialState.posts.action.data],
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있어요.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1: ", store.getState()); // state가 나와요

// action을 만드는 creator: 액션 생성자
const logIn = (data) => {
  return {
    type: "LOG_IN", // action name
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

// console.log("2: " + store.getState()); '+'로 하면 [object Object]로 나온다.
console.log("2: ", store.getState());

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
