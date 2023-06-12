// import React from 'react';
// import classcss from './NewPost.module.css';

// function NewPost() {
//     function ChangeBodyHandler(event) {
//         console.log(event.target.value);
//     }
//     return (
//         <form action="" className={classcss.form}>
//             <p>
//                 <label htmlFor="body">Test</label>
//                 <textarea name="text" id="body" required rows={3} onChange={ChangeBodyHandler}></textarea>
//             </p>
//             <p>
//                 <label htmlFor="name">Your name</label>
//                 <input type="text" id='name' required onChange={ChangeBodyHandler} />
//             </p>
//         </form>
//     )
// }

// export default NewPost;





// * Hooks :-

// (1) usestate :-

import React from "react";
import { useState } from "react";
import classcss from './NewPost.module.css';

function NewPost() {
    const [enteredBody, setEnteredBody] = useState('');
    function ChangeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    return (
        <form action="" className={classcss.form}>
            <p>
                <label htmlFor="body">Test</label>
                <textarea name="text" id="body" required rows={3} onChange={ChangeBodyHandler}></textarea>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id='name' required onChange={ChangeBodyHandler} />
            </p>
        </form>
    )


}
export default NewPost;



