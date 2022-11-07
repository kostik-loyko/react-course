import React from 'react';
import MyButton from './UI/buttons/MyButton';

const PostItem = ({ remove, post, namber }) => {


  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong className="post__title">{namber + 1}. {post.title}</strong>
          <p className="post__text">{post.body}</p>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => remove(post)}>remove</MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostItem;