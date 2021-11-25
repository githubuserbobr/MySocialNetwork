import React from "react";
import axios from "axios";
import { toggleIsFetching } from "../../Redux/Reducers/usersReducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUser } from "../../Redux/Reducers/profile-Reducer";
import { withRouter } from "react-router";
class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

      .then((response) => {
        toggleIsFetching(false);
        this.props.setProfileUser(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
let WithRouterDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setProfileUser })(
  WithRouterDataComponent
);
