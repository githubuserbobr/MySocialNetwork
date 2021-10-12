import React from 'react';
import c from './MyPosts.module.css';
import Post from '../Post';



const MyPosts = (props) => {
  
  return (
    <div className={c.postsBlock}>
      {props.PostsData.map(posts => (<Post message={posts.message} likeCounts={posts.likeCounts} id={posts.id} />))}
      <div>
        <h3> My posts </h3>
      </div>
      <div>
        <div>
          <input value={props.inputPost} onChange={(event) => { props.dispatch({type: 'HANDLE-INPUT-POS',event: event}) }} placeholder='write something' />
        </div>
        <div>
          <button onClick={props.dispatch({type:'ADD-POST'})} >Add post</button>
        </div>
      </div>
      <div className={c.posts}>

      </div>
    </div>)
};
export default MyPosts;