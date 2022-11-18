import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, setChangingPost } from "../../../redux/reducers/profileReducer";

const PostUnchanged = (props) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>{props.text}</div>
                <button onClick={() => dispatch(deletePost(props.id))}>delete post</button>
                <button onClick={() => dispatch(setChangingPost(props.id))}>change post</button>
        </div>
    )
}

export default PostUnchanged;