import React from "react";
import ProfileInfo from "./ProfileInfo";

import NewPost from "./NewPost";

const Profile = () => {
    return (
        <div>
            Banner
            <ProfileInfo />
            <NewPost text={'new post'} />

        </div>
    )
}

export default Profile;