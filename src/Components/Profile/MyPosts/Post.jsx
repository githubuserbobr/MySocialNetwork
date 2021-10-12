import React from 'react';
import c from './Post.module.css';
const Post = (props) => {

  return (
    <div className={c.item}>
      <img src='https://img.championat.com/i/article/33/55/1391713355_b_aleksandr-ovechkin.jpg' />
      {props.message}
      <div>
        <span> Like {props.likeCounts}</span>
      </div>
    </div>
  )
};
export default Post;