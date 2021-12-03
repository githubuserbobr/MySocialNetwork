import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { getLogin } from "./../../Redux/Reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getLogin();
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
export default connect(mapStateToProps, { getLogin })(HeaderContainer);
