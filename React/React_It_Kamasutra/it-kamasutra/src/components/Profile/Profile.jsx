import React from 'react';
import MyPosts from './MyPost/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
    <div className={classes.content}>
      <div>
        <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
      </div>
      <div>
        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
      </div>
      <MyPosts />
    </div>
    );
}

export default Profile;