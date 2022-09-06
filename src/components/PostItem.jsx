import React from 'react'

const PostItem = ({ post, number }) => {
  return (
    <div className='post'>
      <div>
        <strong className='title'>{number}. {post.title}</strong>
        <p>{post.description}</p>
      </div>
      <div>
        <button>delete</button>
      </div>
    </div>
  )
}

export default PostItem