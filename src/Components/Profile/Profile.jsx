import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';


const Profile = (props) => {
  debugger;
  return (
    <div className={c.wrapper}>
      <ProfileInfo />
      
        <MyPostsContainer postsData={props.postsData} dispatch={props.dispatch} inputPost={props.inputPost} />
    
    </div>)
};

export default Profile;