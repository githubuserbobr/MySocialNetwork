import React from 'react';
import c from './MyPosts.module.css';
import Post from '../Post';

const MyPosts = (props) => {
  debugger
  return (
    <div className={c.postsBlock}>
      {props.postsData.map(posts => (<Post message={posts.message} likeCounts={posts.likeCounts} id={posts.id} />))}
      <div>
        <h3> My posts </h3>
      </div>
      <div>
        <div>
          <input value={props.inputPost} onChange={props.newMessage} placeholder='write something' />
        </div>
        <div>
          <button onClick={props.addPost} >Add post</button>
        </div>
      </div>
      <div className={c.posts} />
      
    </div>)
};
export default MyPosts;
