export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const setUserAuthData = (Id, email, login) => {
  return { type: SET_USER_AUTH_DATA, data: { Id, email, login } };
};
export default authReducer;
