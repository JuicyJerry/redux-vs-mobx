const { createStore } = require("redux");

// reducer는 함수, 새로운 state를 만들어 주는 역할 (불변성 조심!)
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        comA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        comB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        comC: action.data,
      };
    default:
      return prevState;
  }
  // 이 모양도 지저분해져서 나중에 immer나 immutable를 사용한다
};

const initialState = { comA: "a", comB: 14, comC: null };

const store = createStore(reducer, {
  initialState,
});

// View(화면은 언제 바뀌어요): 아래 subscribe가 react-redux안에 들어있어서 따로 써줄필요없다.
store.subscribe(() => {
  console.log("changed"); // 화면을 바꿔주는 코드는 여기서!
});

console.log("1st: ", store.getState());
console.log("2st: ", store);

// action, 변수명을 지어야 하는 상황에서 구체적으로 짓기보다(ex. changeCompAtoB) 추상적(넓은 범위)으로 짓는 것이 코드가 간결해짐(중복 해결)
// 함수 자체가 action이 아니라, 객체가 action (동적으로 action 생성) 함수 아님
// => action을 동적으로 만든 action creator (편의를 위한 기능)
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

const changeCompB = (data) => {
  return {
    type: "CHANGE_COMP_B",
    data,
  };
};

/*
    - Dispatch(action) is the one way to trigger a state change. 
    
    store.dispatch({
        type: "CHANGE_COMP_A",
        data: "b",
    });
    아래와 동일
*/
store.dispatch(changeCompA("b"));

console.log("3rd: ", store.getState());
