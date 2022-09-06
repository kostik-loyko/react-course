import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{title}</h2>
      {posts.map((post, index) =>
        <PostItem number={index + 1} post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList