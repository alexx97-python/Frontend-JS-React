import React from 'react';
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
      <div>
        My posts
        <div> New post</div>
      </div>
      <div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
      </div>
    </div>
    );
}

export default Profile;