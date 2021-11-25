import React from "react";
import { connect } from "react-redux";
import { toggleIsFetching } from "../../Redux/Reducers/usersReducer";
import Header from "./Header";
import { setUserAuthData } from "./../../Redux/Reducers/auth-reducer";
import { usersApi } from "../../api/api";
class HeaderContainer extends React.Component {
  componentDidMount() {
    toggleIsFetching(true);
    usersApi.getLogin()

      .then((data) => {
        toggleIsFetching(false);
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          this.props.setUserAuthData(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);
