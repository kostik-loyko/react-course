import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({ post, number, delet }) => {
  return (
    <div className='post'>
      <div>
        <strong className='title'>{number}. {post.title}</strong>
        <p>{post.description}</p>
      </div>
      <div>
        <MyButton onClick={() => delet(post)}>delete</MyButton>
      </div>
    </div>
  )
}

export default PostItem