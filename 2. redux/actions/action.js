// action을 만드는 creator: 액션 생성자
const logIn = (data) => {
  return {
    type: "LOG_IN", // action name
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

module.export = {
  logIn,
  logOut,
  addPost,
};
