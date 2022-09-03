import React, { useState, useRef } from 'react';
import PostList from './components/UI/PostList';
import PostForm from './components/UI/PostForm';
import './styles/App.css';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'zz' },
    { id: 2, title: 'zz 2', body: 'gg 2' },
    { id: 3, title: 'gg 3', body: 'aa 3' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort'
          options={[
            { value: 'title', name: 'Sort by title' },
            { value: 'body', name: 'Sort by description' }
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={sortedPosts} title={'List post'} />
        : <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      }

    </div>
  );
}

export default App;
