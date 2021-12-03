import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
let withAuthRedirect = function (Component) {
  class withAuthRedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let connectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    withAuthRedirectComponent
  );
  return connectedRedirectComponent;
};
export default withAuthRedirect;
