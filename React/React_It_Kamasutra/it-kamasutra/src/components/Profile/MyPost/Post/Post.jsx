import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src="https://flxt.tmsimg.com/assets/p3542039_p_v8_ac.jpg" />
            {props.message}
        <div>
            <span>Like {props.like} </span>
        </div>
        
    </div>
    );
}

export default Post;