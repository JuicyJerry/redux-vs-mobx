const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        compA: action.data, // action name
        compB: 12,
        compC: null,
      };
  }
};
const initialState = {
  comA: "a",
  comB: 12,
  comC: null,
};

// initialState.comA = "b"; // 이렇게 사용하면 안 된다

const store = createStore(reducer, initialState);

console.log("1: " + store.getState()); // state가 나와요

// action을 만드는 creator: 액션 생성자
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A", // action name
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log("2: " + store.getState());
