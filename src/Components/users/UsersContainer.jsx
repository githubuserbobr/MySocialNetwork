import { connect } from "react-redux";
import {
  follow,
  un_follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProcess,
  getUsers,
} from "../../Redux/Reducers/usersReducer";
import Users from "./Users";
import React from "react";
import Loader from "../../assets/Loader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pages) => {
    this.props.setCurrentPage(pages);
    this.props.getUsers(pages, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Loader />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          un_follow={this.props.un_follow}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
          followingProcess={this.props.followingProcess}
          toggleFollowingProcess={this.props.toggleFollowingProcess}
        />
      </>
    );
  }
}
 withAuthRedirect(UsersAPIComponent);
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProcess: state.usersPage.followingProcess,
  };
};

export default compose( connect(mapStateToProps, {
  follow,
  un_follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProcess,
  getUsers,
}),withAuthRedirect) (UsersAPIComponent);
