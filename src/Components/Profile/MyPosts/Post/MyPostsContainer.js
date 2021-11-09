import MyPosts from './MyPosts';
import { addPostActionCreator, handleInputPostActionCreator } from '../../../../Redux/Reducers/profile-Reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  debugger
  return {
    postsData: state.profilePage.postsData,
    inputPost: state.profilePage.inputPost
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    newMessage: (event) => {
      dispatch(handleInputPostActionCreator(event))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
