import React from 'react';
import s from '../MyPost/MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 15},
        {id: 3, post: 'Hi', likescount: 25},
        {id: 4, post: 'Hi', likescount: 19},
        {id: 5, post: 'Hi', likescount: 9},
    ]

    return (
    <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div> 
            <div>
                <textarea></textarea>
            </div>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].post} like={postData[0].likesCount} />
            <Post message={postData[1].post} like={postData[1].likesCount} />
        </div>
    </div>
    );
}

export default MyPosts;