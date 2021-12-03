import { usersApi } from "../../api/api";

export const ADD_POST = "ADD_POST";
export const HANDLE_INPUT_POST = "HANDLE_INPUT_POST";
export const SET_PROFILE_USER = "SET_PROFILE_USER";
let initialState = {
  inputPost: "",
  postsData: [
    { id: "1", message: "Hi,how are you?", likeCounts: "13" },
    { id: "2", message: "It's my first post!", likeCounts: "8" },
  ],
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        message: state.inputPost,
        likeCounts: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        inputPost: "",
      };
    }

    case HANDLE_INPUT_POST: {
      return {
        ...state,
        inputPost: action.value,
      };
    }
    case SET_PROFILE_USER:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export const handleInputPostActionCreator = (event) => {
  return { type: HANDLE_INPUT_POST, value: event.currentTarget.value };
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const setProfileUser = (profile) => ({
  type: SET_PROFILE_USER,
  profile,
});
export const getProfile = (id) => {
  return (dispatch) => {
    usersApi.getProfile(id).then((response) => {
      dispatch(setProfileUser(response.data));
    });
  };
};
export default profileReducer;
