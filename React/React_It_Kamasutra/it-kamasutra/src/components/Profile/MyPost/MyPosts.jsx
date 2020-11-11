import React from 'react';
import s from '../MyPost/MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.post} like={p.likesCount} />)
    
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    };

    return (
    <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div> 
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
          <button onClick={ addPost }>Add post</button>
          <button>Remove post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
    );
}

export default MyPosts;