import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CommentCreate } from "./CommentCreate";
import { CommentList } from "./CommentList";

export const PostList = ({ posts, fetchPosts }) => {

    const submitPosts = () => {
        fetchPosts();
    };

    const renderedPosts = Object.values(posts).map(post => {
        return <div 
        className="card" 
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postComments={post.comments}/>
                <CommentCreate postId={post.id} submitPosts={submitPosts}/>
            </div>
        </div>
    })

    return(
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
            {renderedPosts}
        </div>
    );
};