import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./actions/user";

const App = () => {
  // const posts = useSelector((state) => {
  //   state.user.posts;
  // });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch(); // dispatch 함수를 가져옴
  const onClick = useCallback(() => {
    dispatch(
      // 원래는 input value가 들어가겠지만, 여기선 dummy data
      logIn({
        id: "zerocho",
        password: "비밀번호",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(
      // 원래는 input value가 들어가겠지만, 여기선 dummy data
      logOut()
    );
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default App;
