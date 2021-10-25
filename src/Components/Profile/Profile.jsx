import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = () => {
    return (
        <div className={c.wrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
};

export default Profile;
