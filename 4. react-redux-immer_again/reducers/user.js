const initialState = { isLoggingIn: false, data: null };
const { produce } = require("immer");

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT = "LOG_OUT";

// nextState = produce(prevState, (draft) => {}); // immer의 기본 꼴, produce 함수는 이전 state 바탕으로 action 적용해 다음 state를 만든다.

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      /*
      state.data = null;
      state.deep.deeper.deepest.a = 'b'; 이걸 쓰려고 하는데 불변성을 지키려고
      {
        ...prevState,
        data: null,
        deep: {
          ...prevState.deep,
          deeper: {
            ...prevState.deeper,
            deepest: {
              ...prevState.deepest,
              a: 'b'
            }
          }
        }
      }
  
      => 이걸 편하게 해주려고 immer 라이브러리를 사용한다.
  */

      case LOG_IN_REQUEST:
        (draft.data = null), (draft.isLoggingIn = true);
        break;
      // return {
      //   ...prevState,
      //   isLoggingIn: true,
      // };
      case LOG_IN_SUCCESS:
        (draft.data = action.data), (draft.isLoggingIn = false);
        break;

      // return {
      //   ...prevState,
      //   data: action.data,
      //   isLoggingIn: false,
      // };
      case LOG_IN_FAILURE:
        (draft.data = null), (draft.isLoggingIn = false);
        break;
      // return {
      //   ...prevState,
      //   data: null,
      //   isLoggingIn: true,
      // };
      case LOG_OUT:
        (draft.data = null), (draft.isLoggingIn = false);
        break;
      // return {
      //   ...prevState,
      //   data: null,
      //   isLoggingIn: false,
      // };
      default:
        break;
    }
  });
};

module.exports = userReducer;
