import React, { useState } from "react";
import axios from 'axios';

export const CommentCreate = ({ postId, submitPosts }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        });

        setContent('');
        submitPosts();
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={content} 
                onChange={e => setContent(e.target.value)} 
                className="form-control"></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
};