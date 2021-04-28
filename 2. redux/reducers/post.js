// 데이터 구조가 분리된 후에 initialState 기본값도 같이 넣어줘야해요. 원래 모양대로([])
const initialState = [];

// 데이터 구조가 분리된 후에 prevState가 initialState가 아니라 index2의 posts 부분을 가리킨다
const postReducer = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.data];
    default:
      // default가 필요한 이유는 case에 해당되지 않는 것이 들어왔을 경우를 위해서 (ex. 오타)
      return prevState;
  }
};

module.exports = postReducer;
