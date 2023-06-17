import React from "react";
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";


function PostList() {
    const [enteredBody, setEnteredBody] = useState('Body :');
    const [enteredAuthor, setEnteredAuthor] = useState('Author :');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (

        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />

            <Post author = {enteredAuthor} body = {enteredBody} />
        </>

    )
}

export default PostList;