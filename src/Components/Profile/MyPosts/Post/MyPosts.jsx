import React, { Component } from 'react';
import c from './MyPosts.module.css';
import Post from '../Post';


const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
      </div>
      <div>
        <textarea placeholder='write something'></textarea>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message="Hi,how are you?" likeCounts="15"/>
        <Post message="It's my first post!" likeCounts="30"/>
        </div>
        </div>)
};
export default MyPosts;