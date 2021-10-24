import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, handleInputPostActionCreator } from '../../../../Redux/Reducers/profile-Reducer';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    newMessage: (event) => {
      dispatch(handleInputPostActionCreator(event))
    },
  }
}
let mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData
  }
}

const MyPostsContainer = connect(mapDispatchToProps, mapStateToProps)(MyPosts)

export default MyPostsContainer;
