import { connect } from "react-redux";
import {
  followAC,
  un_followAC,
  setUsersAC,
} from "../../Redux/Reducers/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid));
    },
    un_follow: (userid) => {
      dispatch(un_followAC(userid));
      debugger
    },
    setUsers: (users) => {
      debugger
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
