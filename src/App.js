import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/buttom/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' },
  ]);
  return (
    <div className='App'>
      <form>
        <MyInput type='text' placeholder='Post name' />
        <MyInput type='text' placeholder='Post description' />
        <MyButton disabled>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'List post'} />
    </div>
  );
}

export default App;
