import { useState, useRef} from 'react'
// import React from 'react';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Input from './Input.jsx';
import Post from './Post.jsx';

function App() {
  const [posts, setPosts] = useState([]);
  const idRef = useRef(1);

  function addPost(title) {
    const newPost = {id: idRef.current, title};  
    setPosts([newPost, ...posts]);
    idRef.current += 1;
  }

  function delPost(id) {
    const updatedPosts = posts.filter((post) => post.id != id);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
        <Navbar/>
        <Input addPost={addPost}/>
        {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} delPost={delPost}/>)}
    </div>
  );
}

export default App
