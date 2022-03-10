import React, {useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsLoadingComponent from './components/PostsLoading';

function App() {
  const PostsLoading = PostsLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/Post?format=json`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostsLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}
export default App;