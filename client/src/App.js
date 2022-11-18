import React, { useState, useEffect } from 'react';
import { PostCreate } from './PostCreate';
import { PostList } from './PostList';
import axios from 'axios';


const App = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='container'>
            <h1>Create Post</h1>
            <PostCreate fetchPosts={fetchPosts}/>
            <hr></hr>
            <h1>Posts</h1>
            <PostList posts={posts} fetchPosts={fetchPosts}/>
        </div>
    );
};

export default App;