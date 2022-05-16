import React from "react";
import { useDispatch } from "react-redux";
import { addPost, typeNewPost } from "../../redux/reducers/profileReducer";

const NewPost = (props) => {
    const dispatch = useDispatch();
   
    let uiposts = props.posts.map((obj) => {
        return <div>{obj.text}</div>
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