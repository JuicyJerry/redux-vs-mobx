const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  email: "",
  password: "",
};

// const LOG_IN_REQUEST = "LOG_IN_REQUEST";
// const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
// const LOG_IN_FAILURE = "LOG_IN_FAILURE";
// const LOG_OUT = "LOG_OUT";

// const userReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case LOG_IN_REQUEST:
//       return {
//         ...prevState,
//         isLoggingIn: true,
//       };
//     case LOG_IN_SUCCESS:
//       return {
//         ...prevState,
//         data: action.data,
//         isLoggingIn: false,
//       };
//     case LOG_IN_FAILURE:
//       return {
//         ...prevState,
//         data: null,
//         isLoggingIn: true,
//       };
//     case LOG_OUT:
//       return {
//         ...prevState,
//         data: null,
//         isLoggingIn: false,
//       };
//     default:
//       return prevState;
//   }
// };

// reducers 안에서 logOut이라는 함수하나 만들어줬는데 slice가 logout action을 만들어 주었다.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // (postSlice의) 동기적인 액션들을 넣는다
    // (postSlice의) 내부적인 액션들을 넣는다
    logOut(state, action) {
      state.data = null;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: {
    // (postSlice의) 비동기적인 액션들을 넣는다
    // (postSlice의) 외부적인 액션들을 넣는다

    // 다이나믹 속성 문법(2015)
    [logIn.pending](state, action) {
      // 실제 이름은 user/logIn/pending
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      // user/logIn/fulfilled
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      // user/logIn/rejected
      state.data = null;
      state.isLoggingIn = false;
    },
  },
});

module.exports = userSlice;
