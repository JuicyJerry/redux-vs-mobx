const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
      // axios.post().then().catch으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

// const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const logInRequest = (data) => {
  return {
    // type: LOG_IN_REQUEST,
    type: "LOG_IN_REQUEST",
    data: {
      id: "zerocho",
      data,
    },
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

// // sync actin creator: action을 만드는 creator: 액션 생성자
// const logIn = (data) => {
//   return {
//     type: "LOG_IN", // action name
//     data,
//   };
// };

const logOut = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

module.exports = {
  logIn,
  logOut,
};
