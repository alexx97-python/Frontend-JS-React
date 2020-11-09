import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
    <div >
      <div>
        <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
    );
}

export default ProfileInfo;