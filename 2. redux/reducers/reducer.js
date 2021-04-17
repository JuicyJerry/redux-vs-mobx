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

module.exports = reducer;
