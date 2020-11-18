import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    };

    let onPostChange = (text) => {
        props.store.dispatch( onPostChangeActionCreator(text) );
        
    }

    return (
    <MyPosts 
    addPost={addPost}
    posts={state.profilePage.postData}
    updateNewPostText={onPostChange}
    newPostText = {state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;