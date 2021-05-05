const { produce } = require("immer");

// 데이터 구조가 분리된 후에 initialState 기본값도 같이 넣어줘야해요. 원래 모양대로([])
const initialState = {
  isLoggingIn: true,
  data: null,
};

// immer의 기본 꼴 like reducer 역할
//? nextState = produce(prevState, (draft) => {});

// 데이터 구조가 분리된 후에 prevState가 initialState가 아니라 index2의 user 부분을 가리킨다
// prevState는 불변성을 지켜야되어서 바꾸면 안 되고, 대신에 복사본인 draft를 바꾼다.

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true; // 로딩창 돌아가는 기능을 위해 만듬
        break;
      case "LOGIN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT_REQUEST":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;
