import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={c.wrapper}>
      <ProfileInfo />
      <MyPosts PostsData={props.posts} dispatch={props.dispatch}  inputPost={props.inputPost} />
    </div>)
};

export default Profile;