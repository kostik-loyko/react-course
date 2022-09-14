import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './UI/select/MySelect'
import './style/app.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', description: 'Only frontend language' },
    { id: 2, title: 'Python', description: 'Very famous language' },
    { id: 3, title: 'Java', description: 'Very good language' },
    { id: 4, title: 'C#', description: 'Most backend language' },
  ])
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: '5px 15px' }} />
      <MySelect
        options={[{ value: 'title', name: 'Sort by title' }, { value: 'description', name: 'Sort by description' }]}
        defaultValue='Sort by'
        value={selectedSort}
        onChange={sortPosts}
      />
      {posts.length ? <PostList delet={deletePost} posts={posts} title={'List posts'} /> : <h2 style={{ textAlign: 'center' }}>Posts not found</h2>}

    </div >
  );
}

export default App;
