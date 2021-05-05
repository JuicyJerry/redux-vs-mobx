import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App extends React.Component {
  onClick = () => {
    this.props.dispatchLogin(
      logIn({
        id: "zerocho",
        password: "비밀번호",
      })
    );
  };

  onLogout = () => {
    this.props.dispatchLogOut();
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
          "로그인 해주세요."
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

// reduxs state를 component props로 만든다.
const mapStateToProps = (state) => ({
  user: state.user,
  // user: filterActiveUser(state.user),
  posts: state.post,
}); // reselect
// reselect를 사용해야하는 이유, 훅스와 비교해서 보기!
// 여기서는 한 객체안에 있기 때문에 통채로 바뀌기 때문에, 한 요소가 바뀌었을 때 다른요소도 같이 계산해줘야한다
// 하지만, 훅스의 경우는 분리되어 있어서 요소별로 그대로 유지가 되어 계산량이 적어진다

// 리덕스에서 데이터를 가져오는 컴포넌트를 컨테이너라고 하는데
// 훅스에서 useSelector 붙은 얘들을 컨테이너 컴포넌트라고 할 수 있다

// 미리 어떤 함수에다가 디스패치한 어떤 것을 연결
// redux dispatch를 component props로 만든다
// 좌: this.props.logIn, this.props.logOut
// *좌는 *우의 action logIN, action logOut과는 다르다

// 만약, 헷갈리면, 주석과 같이 바꿔도 됨
const mapDispatchToProps = (dispatch) => ({
  // logIn: (data) => dispatch(logIn(data)),
  dispatchLogin: (data) => dispatch(logIn(data)),
  // logOut: () => dispatch(logOut()),
  dispatchLogOut: () => dispatch(logOut()),
});

//connect: high order component(connect)에서 App이라는 컴포넌트를 확장해주는 역할
export default connect(mapStateToProps, mapDispatchToProps)(App);
