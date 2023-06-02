// (1)
// function Post(){
//     return (
//         <div>
//             <p>Welcome to react js</p>
//             <p>welcome to vite react</p>
//         </div>
//     )
// }
// export default Post;



// (2)

// function Post() {
//     const names = ["king", "ABD"]
//     const chooseNames = Math.random() > 0.5 ? names[0] : names[1];

//     return(
//         <div>
//             <p>{chooseNames}</p>
//             <p>Welcome to react js programming</p>
//         </div>
//     )
// }

// export default Post;



// (3)

// function Post (){
//     const names = ["Ram", "Shyam"]

//     return(
//         <div>
//             <p>{names}</p>
//         </div>
//     )
// }

// export default Post;




// (4)

function Post(props){
    return (
        <div>
            {/* <p>{props.author}</p>
            <p>{props.body}</p> */}

            <p>{props.author} {props.body}</p>
        </div>
    )
}

export default Post;