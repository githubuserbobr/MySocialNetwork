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
  followingProcess: false,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
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
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROCESS:
      console.log(state.followingProcess)
      debugger
      return {
        ...state,
        followingProcess: action.isFetching,
      };

    default:
      return state;
  }
};
export const follow = (userid) => {
  return { type: FOLLOW, userid };
};
export const un_follow = (userid) => ({
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
export const toggleFollowingProcess = (isFetching) => {
  return { type: TOGGLE_FOLLOWING_PROCESS, isFetching };
};
export default usersReducer;
