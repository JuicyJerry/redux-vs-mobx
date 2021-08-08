const { combineReducers } = require("redux");
const userSlice = require("./userSlice");
const postSlice = require("./postSlice");

module.exports = combineReducers({
  // slice는 단순히 리듀서 뿐만 아니라 다양한 것들을 합쳐놓은것. 리듀서, 액션, 초기 스테이츠,,
  // 합친 이유: 보통 액션은 어떤 리듀서에 종속되어 있어, 나누지 말고 합치자. 쓰다보니깐 리듀서랑 액션이랑 그룹화가 되니깐 합쳐놓자
  user: userSlice.reducer,
  post: postSlice.reducer,
});
