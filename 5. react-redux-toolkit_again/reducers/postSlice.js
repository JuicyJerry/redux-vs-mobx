const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // (postSlice의) 동기적인 액션들을 넣는다
    // (postSlice의) 내부적인 액션들을 넣는다
    clearPost(state, action) {
      // 동기적으로 데이터를 비운다
      state.data = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {
        // ...
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        // ...
      })
      .addMatcher(
        // 여러 액션간에 공통적인 부분 처리할 때 사용
        (action) => {
          return action.type.includes("./pending");
        },
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addDefaultCase((state, action) => {
        // default
      }),

  // extraReducers: {
  //   // (postSlice의) 비동기적인 액션들을 넣는다
  //   // (postSlice의) 외부적인 액션들을 넣는다
  //   [addPost.pending](state, action) {
  //     // user/logIn/pending
  //   },
  //   [addPost.fulfilled](state, action) {
  //     // user/logIn/fulfilled
  //     state.data.push(action.payload);
  //   },
  //   [addPost.rejected](state, action) {
  //     // user/logIn/rejected
  //   },
  // },
});

module.exports = postSlice;
