import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({ create }) => {

  const [post, setPost] = useState({ title: '', description: '' });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', description: '' });
  }

  return (
    <form>
      <MyInput type='text' value={post.title} placeholder='title post' onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <MyInput type='text' value={post.description} placeholder='description post' onChange={(e) => setPost({ ...post, description: e.target.value })} />
      <MyButton onClick={addPost}>Create post</MyButton>
    </form>
  )
}

export default PostForm