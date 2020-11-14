import React from 'react';
import MyPosts from './MyPost/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
    <div >
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        dispatch = {props.dispatch}
        />
    </div>
    );
}

export default Profile;