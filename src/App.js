import React, { useState } from 'react';
import PostList from './componets/PostList';
import './styles/App.css';

import PostForm from './componets/PostForm';
import MySelect from './componets/UI/select/MySelect';

const App = () => {
  let [posts, setPosts] = useState([
    { id: 2, title: 'Buby', body: 'zbile' },
    { id: 1, title: 'AvaScript', body: 'Language of programming' },
    { id: 3, title: 'C++', body: 'Backend programming' }
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchPost, setSearchPost] = useState('');

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0px' }} />
      <input
        value={searchPost}
        onChange={e => setSearchPost(e.target.value)}
        placeholder='search...'
      />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue={'sort for'}
        options={[{ value: 'title', name: 'sort for title' }, { value: 'body', name: 'sort for description' }]}
      />
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title={'Posts list'} />
        :
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      }

    </div >
  );
}

export default App
