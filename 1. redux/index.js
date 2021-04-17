const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      // default가 필요한 이유는 case에 해당되지 않는 것이 들어왔을 경우를 위해서 (ex. 오타)
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

// 예시
// const nextState = {
//   ...initialState,
//   compA: action.data,
// };

// initialState.comA = "b"; // 이렇게 사용하면 안 된다

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react=redux 안에 들어있어요.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1: ", store.getState()); // state가 나와요

// action을 만드는 creator: 액션 생성자
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A", // action name
    data,
  };
};

store.dispatch(changeCompA("b"));

// console.log("2: " + store.getState()); '+'로 하면 [object Object]로 나온다.
console.log("2: ", store.getState());
