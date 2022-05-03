import React from "react";
import ProfileInfo from "./ProfileInfo";
import { useSelector } from "react-redux";
import NewPost from "./NewPost";

const Profile = () => {
    let status = useSelector((state) => state.profile.profileStatus);
    return (
        <div>
            Banner
            <ProfileInfo status={status}/>
            <NewPost />

        </div>
    )
}

export default Profile;