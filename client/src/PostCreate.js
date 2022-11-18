import React, { useState } from "react";
import axios from 'axios';

export const PostCreate = ({ fetchPosts }) => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://posts.com/posts/create', {
            title
        });

        setTitle('');
        fetchPosts();
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className="form-control"
                    ></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};