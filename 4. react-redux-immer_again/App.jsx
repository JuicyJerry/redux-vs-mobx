import React from "react";
import { connect } from "react-redux";

const { logIn, logOut } = require("./actions/user");

class App extends React.Component {
  onClick = () => {
    this.props.dispatchLogIn({
      id: "zerocho",
      password: "비밀번호",
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut(logOut());
  };

  render() {
    const { user } = this.props;

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
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

// 이 방식을 사용한다면, 해당 함수가 실행할 때마 리렌더링되어서 성능상 문제가 생길 수 있어 reselect를 사용한다. (훅스의 경우에는 resselect를 사용할 필요가 없다)
// 리덕스 state를 component props로 바꾼다
const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // reselect

// 리덕스 dispatch를 component props로 바꾼다
const mapDispatchToProps = (dispatch) => ({
  // action login, action logout과는 다르다. 헷갈리면 앞에 dispatch를 붙여준다.
  // hooks랑 비교해보면, 이건 하나로 묶여있어서 바뀔 때마다 다같이 바꿔줘야되지만 hooks는 분리되어 있어서 바꾹 편하다
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

// connect라는 high-order component,App compoennt를 확장하는 connect hight order component
export default connect(mapStateToProps, mapDispatchToProps)(App);
