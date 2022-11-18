import React from "react";
import { useSelector } from "react-redux";
import NewPost from "./NewPost/NewPost";
import Banner from "./Banner";
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {
    return (
        <div>
            <Banner />
            <ProfileStatus status={props.status} />
            <NewPost newValue={props.newValue} 
                     changingValue={props.changingValue} 
                     posts={props.posts} />
        </div>
    )
}

const ProfileContainer = () => {

    let status = useSelector(state => state.profile.profileStatus);
    let newValue = useSelector(state => state.profile.newPostText);
    let changingValue = useSelector(state => state.profile.changingPostText)
    let posts = useSelector(state => state.profile.posts);

    return (
        <Profile status={status} 
                 newValue={newValue} 
                 changingValue={changingValue} 
                 posts={posts} />
    )
}

export default ProfileContainer;