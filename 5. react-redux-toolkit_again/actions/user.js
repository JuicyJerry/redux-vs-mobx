/*
  우리는 이전까지 action을 따로 분리해주어서 동기 액션, 비동기 액션을 몰아넣었는데
  이제부터(툴킷: createSlice 사용 이후) 비동기 액션의 공간이 될 

  동기 액션은 따로 공간이 필요없죠. 왜냐면, slice안의 reducer에 있을테니깐.
*/

const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

/*
  thunk에서 쓰는 용어는 조금 다르다. 
  loading, success, failure => pending, fulfilled, rejected
 */
const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // #current line +1&2와 같이 사용하여 접근할 수 있음
  // const state = thunkAPI.getState();
  // state.user.data

  /*
  1. 서버가 있다는 가정
  data - 이메일이나, 비밀번호 있으면 서버로 보내서 응답으로 변수 result의 객체를 받는거든요. 
  {
    userId: 1,
    nickname: "zerocho",
  }

  2. await를 사용할 때, try~catch문을 사용하락 했는데 여기  thunk에서는 사용하지말아라. 왜냐하면, error가 나지 않아서 fullfilled 상태가 되기 때문이다.
  error가 나야지 rejected상태로 간다.

  3. data는 App.jsx의 dispatch(logIn({data}))에서 온 것!

  4. data에서 아이디와 비밀번호가 있어서 서버로 보내면, 서버가 응답(mocking)을 {data}로 와서 fullfied로 전달된다.

  5. 3단계를 reducer에서는 어떻게 처리하는가?

  6.  { userId: 1, nickname: "zerocho" }가 리듀서(user)에서 action.payload가 된다.

*/

  console.log(data);
  // throw new Error("비밀번호가 틀렸습니다.");

  const response = await axios.post("/login", { email, password });
  const result = await delay(500, {
    userId: 1,
    nickname: "zerocho",
  });
  return result;
});

module.exports = {
  logIn,
};
