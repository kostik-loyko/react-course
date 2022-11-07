import React from 'react';
import PostItem from './PostItem';

const PostList = ({ remove, posts, title }) => {

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      {posts.map((post, index) => <PostItem remove={remove} namber={index} post={post} key={post.id} />)}
    </div>
  )
}

export default PostList