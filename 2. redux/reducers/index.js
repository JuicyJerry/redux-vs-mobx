const { combineReducers } = require("redux");
const postReducer = require("./post");
const userReducer = require("./user");

module.exports = combineReducers({
  // 함수를 쪼갤 수 없으므로 redux에서 제공하는 combineReducer를 사용한다
  user: userReducer,
  posts: postReducer,
});
