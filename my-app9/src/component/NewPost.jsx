import React from "react";

function NewPost(props) {
    return (
        <div>
            <form action="">
                <p><label htmlFor="body">Text</label></p>
                <p><textarea name="body" id="body" rows={5} onChange={props.onBodyChange}></textarea></p>
                
                <p><label htmlFor="name">Your Name</label></p>
                <p><input type="text" required onChange={props.onAuthorChange}/></p>
            </form>
        </div>
    )
}
export default NewPost;