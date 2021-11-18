import React from "react";
import c from "./ProfileInfo.module.css";
import Loader from "./../../../assets/Loader";
import No from "./../../../assets/images/No.jpeg"
import Yes from "./../../../assets/images/Yes.png"
const ProfileInfo = (props) => {
  debugger;
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className={c.wrapper}>
      <div>
        <img
          className={c.mainImg}
          src="https://ewscripps.brightspotcdn.com/dims4/default/2792cfe/2147483647/strip/true/crop/3000x1688+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F72%2F5e%2Ffcdc659144968e16bc45d33a8b92%2Fgettyimages-518785696.jpg"
        />
      </div>
      <div className={c.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <div>Name: {props.profile.fullName != null  ? props.profile.fullName : "none"}</div>
      <div>AboutMe: {props.profile.aboutMe != null ? props.profile.aboutMe : "none"}</div>
      <div>
        
      </div>
        <div className={c.ContactsWrapper}>
          Contacts:
          <div>
            {" "}
            GitHub:{" "}
            {props.profile.contacts.website != null
              ? props.profile.contacts.website
              : "none"}
          </div>
          <div>
            Facebook:{" "}
            {props.profile.contacts.facebook != null
              ? props.profile.contacts.facebook
              : "none"}
          </div>
          <div>
            Instagram:{" "}
            {props.profile.contacts.instagram != null
              ? props.profile.contacts.instagram
              : "none"}
          </div>
          <div>
            VK:{" "}
            {props.profile.contacts.vk != null && ""
              ? props.profile.contacts.vk
              : "none"}
          </div>
          <div>
            twitter:{" "}
            {props.profile.contacts.twitter != null && ""
              ? props.profile.contacts.twitter
              : "none"}
          </div>
          <div>
            youtube:{" "}
            {props.profile.contacts.youtube != null && ""
              ? props.profile.contacts.youtube
              : "none"}
          </div>
          <div>
          lookingForAJobDescription:{" "}
            {props.profile.lookingForAJobDescription != null 
              ? props.profile.lookingForAJobDescription
              : "none"}
          </div>
          <div className={c.lookingJob}>
          lookingForAJob:{" "}
            <img className={c.lookingJobImg} src={props.profile.lookingForAJob  ? Yes : No }  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
