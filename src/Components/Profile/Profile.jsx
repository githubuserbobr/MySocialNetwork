import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import { Redirect} from 'react-router';

const Profile = (props) => {


    return (
        <div className={c.wrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>)
};

export default Profile;
