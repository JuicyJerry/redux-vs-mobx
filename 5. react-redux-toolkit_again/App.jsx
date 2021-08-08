import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const { logIn } = require("./actions/user"); // 비동기 액션만 따라 가져왔다
const { addPost } = require("./actions/post"); // 비동기 액션만 따라 가져왔다
const userSlice = require("./reducers/userSlice");

const App = () => {
  // const user = useSelector((state) => state.user);
  // const { email, password } = useSelector((state) => state.user);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const onClick = useCallback(async () => {
    setLoading(true); // 로딩창용
    setDone(false);
    setError(false);

    try {
      const response = await axios.post("/login");
      setDone(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // 로딩창은 꺼야죠
    }

    await axios.post("/login");
  }, []);

  // const onClick = useCallback(() => {
  //   // 비동기 처리를 따로 분리해서 하지 않고 바로 여기에 추가해서 할 수 있다. 하지만, action을 따로 분리해준 이유는 나중에 가면 액션이 많아지므로 코드 관리 차원에서 분리해서 관리 및 사용하는 것

  //   dispatch(
  //     // 실제로는 인풋이랑 연결되어있는데 여기선 더미데이터로 테스트
  //     logIn({
  //       id: "zerocho",
  //       password: "비밀번호",
  //     })
  //   );
  // }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut()); // 툴킷이 알아서 액션을 만들어줘요
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  const onChangeEmail = useCallback((e) => {
    dispatch(userSlice.actions.setEmail(e.target.value));
    // setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    dispatch(userSlice.actions.setPassword(e.target.value));
    // setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        userSlice.actions.setLoginForm({
          email,
          password,
        })
      );
    },
    [dispatch, email, password]
    // dispatch는 바뀔리 없는 함수라 안 넣어도 되는데(반대로 넣어도 된다는 것) 노란줄 뜨는게 짜증나서 넣음
  );

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요"
      )}

      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={onChangeEmail}
          onBlur={onChangeEmail}
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          onBlur={onChangePassword}
        />
      </form>
      <button onClick={onAddPost}>게시글 작성</button>
    </div>
  );
};

export default App;
