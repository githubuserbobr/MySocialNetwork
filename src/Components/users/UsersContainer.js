import { connect } from "react-redux";
import {
  follow,
  un_follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProcess
} from "../../Redux/Reducers/usersReducer";
import Users from "./Users";
import { usersApi } from "../../api/api";
import React from "react";
import Loader from "../../assets/Loader";

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pages) => {
    this.props.setCurrentPage(pages);
    this.props.toggleIsFetching(true);
    usersApi
      .getUsers(pages, this.props.pageSize)

      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
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
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProcess: state.usersPage.followingProcess
  };
};

export default connect(mapStateToProps, {
  follow,
  un_follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProcess
})(UsersAPIComponent);
