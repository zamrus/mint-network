import React from "react";
import ProfileInfo from "./ProfileInfo";
import { useSelector } from "react-redux";
import NewPost from "./NewPost";

const Profile = (props) => {
    return (
        <div>
            Banner
            <ProfileInfo status={props.status} />
            <NewPost newValue={props.newValue} posts={props.posts} />
        </div>
    )
}

const ProfileContainer = () => {

    let status = useSelector(state => state.profile.profileStatus);
    let newValue = useSelector(state => state.profile.newPostText);
    let posts = useSelector(state => state.profile.posts);
    
    return (
        <Profile status={status} newValue={newValue} posts={posts} />
    )
}

export default ProfileContainer;