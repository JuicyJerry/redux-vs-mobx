const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
/*
 비동기 액션 커스텀
 어떻게 보면 비동기 처리도 눈속임이에요. 
 비동기 액션 크리에이터라는 기능을 미들웨어를 통해 추가하고
 동기 한 번 부르고 비동기작업안에서 끝날쯤에 동기 한번 더 부르고
 동기 액션들간에 실행 순서를 조작하는 정도밖에 안 되는거에요.
*/
const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    //async action
    dispatch(logInRequest(data));

    try {
      setTimeout(() => {
        // 서버가 없어서
        dispatch(
          loginSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch {
      dispatch(logInFailure(e));
    }
  };
};
const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
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
