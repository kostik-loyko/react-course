import React, { useState } from 'react';
import MyButton from './UI/bunnton/MyButton';
import PostList from './components/PostList';
import './style/app.css';
import MyInput from './UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', description: 'Only frontend language' },
    { id: 2, title: 'Python', description: 'Very famous language' },
    { id: 3, title: 'Java', description: 'Very good language' },
    { id: 4, title: 'C#', description: 'Most backend language' },
  ])

  const [post, setPost] = useState({ title: '', description: '' });

  const addPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', description: '' });
  }

  return (
    <div className="app">
      <form>
        <MyInput type='text' value={post.title} placeholder='title post' onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <MyInput type='text' value={post.description} placeholder='description post' onChange={(e) => setPost({ ...post, description: e.target.value })} />
        <MyButton onClick={addPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'List posts'} />
    </div >
  );
}

export default App;
