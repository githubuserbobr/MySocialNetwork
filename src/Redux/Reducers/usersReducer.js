export const FOLLOW = "FOLLOW";
export const UN_FOLLOW = "UN_FOLLOW";
export const SET_USERS = "SET_USERS";
let initialState = {
  users: [],
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
export default usersReducer;
