import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

return (
    <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
)
}

export default Profile;