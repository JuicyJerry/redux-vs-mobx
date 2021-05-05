// action을 만드는 creator: 액션 생성자
const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

module.exports = {
  addPost,
};
