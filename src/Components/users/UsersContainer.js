import { connect } from "react-redux";
import {
  followAC,
  un_followAC,
  setUsersAC,
  currentPageAC,
  setTotalUsersCountAC,
} from "../../Redux/Reducers/usersReducer";
import Users from "./Users";
import axios from "axios";
import React from "react";
class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    debugger
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )

      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
   onPageChanged = (pages) => {
    this.props.setCurrentPage(pages); axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    )

    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }
  render() {    
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      un_follow={this.props.un_follow}
      onPageChanged={this.onPageChanged}
    />;
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid));
    },
    un_follow: (userid) => {
      dispatch(un_followAC(userid));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pages) => {
      dispatch(currentPageAC(pages));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
