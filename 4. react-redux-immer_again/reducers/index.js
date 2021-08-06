// 분리가 쉬운게 순수함수여서에요.매개변수와 함수내부에서 선언한 변수를 제외하고 다른 것은 참조하지 않는 함수
// reducer는 함수, 새로운 state를 만들어 주는 역할 (불변성 조심!)

const { combineReducers } = require("redux");
const userReducer = require("./user");
const postReducer = require("./post");

module.exports = combineReducers({
  // initialState 구조 따라간다.
  user: userReducer,
  post: postReducer,
});
