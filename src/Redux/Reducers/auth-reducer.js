import { usersApi } from "../../api/api";

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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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
export const getLogin = () => {
  return (dispatch) => {
    toggleIsFetching(true);
    usersApi
      .getLogin()

      .then((data) => {
        toggleIsFetching(false);
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setUserAuthData(id, login, email));
        }
      });
  };
};
export default authReducer;
