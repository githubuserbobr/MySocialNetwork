import React from 'react';
import c from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className={c.wrapper}>
      <div>
        <img className={c.mainImg} src='https://ewscripps.brightspotcdn.com/dims4/default/2792cfe/2147483647/strip/true/crop/3000x1688+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F72%2F5e%2Ffcdc659144968e16bc45d33a8b92%2Fgettyimages-518785696.jpg' />
      </div>
      <div className={c.descriptionBlock}>
        ava + description
      </div>
    </div>)
};

export default ProfileInfo;