import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
    return (
    <div >
      <div>
        <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
    </div>
    );
}

export default ProfileInfo;