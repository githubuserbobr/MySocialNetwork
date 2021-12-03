import { usersApi } from "../../api/api";

export const FOLLOW = "FOLLOW";
export const UN_FOLLOW = "UN_FOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_FOLLOWING_PROCESS = "TOGGLE_FOLLOWING_PROCESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 101,
  currentPage: 1,
  isFetching: false,
  followingProcess: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          debugger;
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pages,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      debugger;
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_PROCESS:
      debugger;
      return {
        ...state,
        followingProcess: action.isFetching
          ? [...state.followingProcess, action.id]
          : state.followingProcess.filter((id) => id != action.id),
      };

    default:
      return state;
  }
};
export const followSuccess = (userid) => {
  debugger;
  return { type: FOLLOW, userid };
};
export const un_followSuccess = (userid) => ({
  type: UN_FOLLOW,
  userid,
});
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (pages) => {
  return { type: SET_CURRENT_PAGE, pages };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProcess = (isFetching, id) => {
  debugger;
  return { type: TOGGLE_FOLLOWING_PROCESS, isFetching, id };
};
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    usersApi
      .usersFollow(id)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(id));
        }
      })
      .then(() => dispatch(toggleFollowingProcess(false, id)));
  };
};
export const un_follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    usersApi
      .usersUn_follow(id)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(un_followSuccess(id));
        }
      })
      .then(() => dispatch(toggleFollowingProcess(false, id)));
  };
};
export default usersReducer;
