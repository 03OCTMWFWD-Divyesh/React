// (1) How to apply direct css :-

// function Post (props){
//     return (
//         <div style={{backgroundColor: "black"}}>
//             <p style={{color: "red"}}>{props.author}</p>
//             <p style={{color: "red"}}>{props.body}</p>
//         </div>
//     )
// }
// export default Post;



// (2) how to apply css in new css file :-

// import classcss from './Post.module.css';
// function Post(props){
//     return (
//         <div className={classcss.post}>
//             <p className={classcss.author}>{props.author}</p>
//             <p className={classcss.body}>{props.body}</p>
//         </div>
//     )
// }

// export default Post;



// (3) Export post in postlist.jsx :-

function Post(props){
    return(
        <div>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    )
}
export default Post;

