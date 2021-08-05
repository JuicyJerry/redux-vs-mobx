const logIn = () => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest());
    setTimeout(() => {
      // 서버가 없어서
      dispatch(loginSuccess());
    }, 2000);
  };
};

/*
 어떻게 보면 비동기 처리도 눈속임이에요. 
 비동기 액션 크리에이터라는 기능을 미들웨어를 통해 추가하고
 동기 한 번 부르고 비동기작업안에서 끝날쯤에 동기 한번 더 부르고
 동기 액션들간에 실행 순서를 조작하는 정도밖에 안 되는거에요.
*/

const logInRequest = () => {
  return {};
};

const loginSuccess = () => {
  return {};
};

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

module.exports = {
  logIn,
  logOut,
};
