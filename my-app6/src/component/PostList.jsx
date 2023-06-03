import Post from "./Post";
import classcss from './PostList.module.css';

function PostList() {
    return (
        <ul className={classcss.postlist}>
            <li> <Post author="mr bean" body="React js developer" />
                <Post author="mr jean" body="Vue js devloper" /></li>
        </ul>
    )
}

export default PostList;