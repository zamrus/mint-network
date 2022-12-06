import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NewPost from "./NewPost/NewPost";
import Banner from "./Banner";
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {
    return (
        <div>
            <Banner users={props.users} />
            <ProfileStatus status={props.status} />
            <NewPost changingValue={props.changingValue} 
                     posts={props.posts} />
        </div>
    )
}

const ProfileContainer = () => {

    useEffect(() => {
        console.log('server request for profile data and sending it to store')
    }, [])

    let status = useSelector(state => state.profile.profileStatus);
    let changingValue = useSelector(state => state.profile.changingPostText)
    let posts = useSelector(state => state.profile.posts);
    let users = useSelector(state => state.users.usersData.length)

    return (
        <Profile status={status} 
                 changingValue={changingValue}
                 users={users} 
                 posts={posts} />
    )
}

export default ProfileContainer;