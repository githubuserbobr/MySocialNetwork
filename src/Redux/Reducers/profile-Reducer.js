export const ADD_POST = 'ADD_POST';
export const HANDLE_INPUT_POST = 'HANDLE_INPUT_POST';
let initialState = {
  inputPost: '',
  postsData: [
    { id: "1", message: "Hi,how are you?", likeCounts: "13" },
    { id: "2", message: "It's my first post!", likeCounts: "8" },
  ],
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "5",
        message: state.inputPost,
        likeCounts: 0
      }
      state.postsData.push(newPost);
      state.inputPost = '';

      break
    case HANDLE_INPUT_POST:
      state.inputPost = action.event.currentTarget.value;

      break

    default: return state
  }
}
export const handleInputPostActionCreator = (event) => {
  return { type: HANDLE_INPUT_POST, event: event }
}
export const addPostActionCreator = () => ({
  type: ADD_POST
})
export default profileReducer