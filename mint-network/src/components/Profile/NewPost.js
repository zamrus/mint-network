import React from "react";
import { useDispatch } from "react-redux";
import { addPost, deletePost, typeNewPost } from "../../redux/reducers/profileReducer";

const NewPost = (props) => {
    const dispatch = useDispatch();
   
    let uiposts = props.posts.map((obj) => {
        return (
            <div>
                <div>{obj.text}</div>
                <button onClick={() => dispatch(deletePost(obj.id))}>delete post</button>
            </div>
        )
    })
    return (
        <div>
            <textarea value={props.newValue} onChange={(event) => {
                dispatch(typeNewPost(event.target.value));
            }}></textarea>
            <button onClick={() => dispatch(addPost())}>добавить пост</button>
            <div>{uiposts}</div>
        </div>
    )
}

export default NewPost;