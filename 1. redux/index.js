const { createStore } = require("redux");

const reducer = () => {};
const initialState = {
  comA: "a",
  comB: 12,
  comC: null,
};

initialState.comA = "b"; // 이렇게 사용하면 안 된다

const store = createStore(reducer, initialState);

console.log(store.getState()); // state가 나와요
