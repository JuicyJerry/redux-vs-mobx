const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

exports.addPost = createAsyncThunk("post/add", async () => {
  return await delay(500, {
    title: "새 게시글",
    content: "내용내용내용",
  });
});
