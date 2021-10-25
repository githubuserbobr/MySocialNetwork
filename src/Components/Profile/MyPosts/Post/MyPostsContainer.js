import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, handleInputPostActionCreator } from '../../../../Redux/Reducers/profile-Reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData
  }
}

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
