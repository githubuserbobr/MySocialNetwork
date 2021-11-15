export const FOLLOW = "FOLLOW";
export const UN_FOLLOW = "UN_FOLLOW";
export const SET_USERS = "SET_USERS";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 101,
  currentPage: 5,
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
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pages,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    default:
      return state;
  }
};
export const followAC = (userid) => {
  return { type: FOLLOW, userid };
};
export const un_followAC = (userid) => ({
  type: UN_FOLLOW,
  userid,
});
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export const currentPageAC = (pages) => {
  return { type: CURRENT_PAGE, pages };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount };
};
export default usersReducer;
