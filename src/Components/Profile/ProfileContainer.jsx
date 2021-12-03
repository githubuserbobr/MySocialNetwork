import React from "react";

import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  setProfileUser,
} from "../../Redux/Reducers/profile-Reducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} isAuth={this.props.isAuth} />
      </div>
    );
  }
}
withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(connect(mapStateToProps, { setProfileUser, getProfile }),
  
  withRouter,
  withAuthRedirect
)(ProfileContainer) 
