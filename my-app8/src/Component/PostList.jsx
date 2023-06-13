import React from "react";
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

function PostList() {
    const [enteredAuthor, setEnteredAuthor] = useState('Ab');
    const [enteredBody, setEnteredBody] = useState('virat');


    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    return (
        <>
            < NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul>
                <Post author={enteredAuthor} body={enteredBody} />
                < Post author="king" body="kohli" />
            </ul>
        </>
    )
}
export default PostList;