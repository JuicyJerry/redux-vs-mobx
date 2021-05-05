const { produce } = require("immer");

// 데이터 구조가 분리된 후에 initialState 기본값도 같이 넣어줘야해요. 원래 모양대로([])
const initialState = [];

// 데이터 구조가 분리된 후에 prevState가 initialState가 아니라 index2의 posts 부분을 가리킨다
const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

module.exports = postReducer;
