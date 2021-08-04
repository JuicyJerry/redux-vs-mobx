// 처음예 action creator 만드는 기준을 state를 어떻게 바꾸고 싶은지 생각해보세요
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

module.exports = {
  logIn,
  logOut,
  addPost,
};
