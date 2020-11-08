import React from 'react';
import s from '../MyPost/MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
        My posts
        <div> 
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" like='12' />
            <Post message="It's my first post" like='15' />
        </div>
    </div>
    );
}

export default MyPosts;