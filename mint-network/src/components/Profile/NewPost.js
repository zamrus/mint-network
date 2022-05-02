import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, typeNewPost } from "../../redux/reducers/profileReducer";

const NewPost = () => {
    const dispatch = useDispatch();
    const newValue = useSelector((state) => state.profile.newPostText);
    const posts = useSelector((state) => state.profile.posts);
    let uiposts = posts.map((obj) => {
        return <div>{obj.text}</div>
    })
    return (
        <div>
            <textarea value={newValue} onChange={(event) => {
                dispatch(typeNewPost(event.target.value));
            }}></textarea>
            <button onClick={() => dispatch(addPost())}>добавить пост</button>
            <div>{uiposts}</div>
        </div>
    )
}

export default NewPost;