import React, { useState, useEffect } from "react";
import axios from 'axios';

export const CommentList = ({ postComments }) => {

    const renderedComments = postComments?.map(comment => {
        // return <li key={comment.id}>{comment.content}</li>;

        return comment.status === 'approved' ? 
            <li key={comment.id}>{comment.content}</li> :
            comment.status === 'pending' ? 
            <li key={comment.id}><i>This comment is pending approval.</i></li> :
            <li key={comment.id}><i>This comment was removed.</i></li>;

    });

    return <ul>{renderedComments}</ul>
};