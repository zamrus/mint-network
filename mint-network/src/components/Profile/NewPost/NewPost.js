import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../../redux/reducers/profileReducer";
import PostChanged from "./PostChanged";
import PostUnchanged from "./PostUnchanged";


const NewPost = (props) => {

    const dispatch = useDispatch();

    let [newPostText, changeNewPostText] = useState('');

    let sendNewPost = () => {
        dispatch(addNewPost(newPostText));
        changeNewPostText('');
    }
   
    let uiposts = props.posts.map((obj) => {
        return (
            <div>
                {obj.changed
                    ? <PostChanged changingValue={props.changingValue} />
                    : <PostUnchanged text={obj.text} id={obj.id} />
                } 
            </div>
        )
    }) // логика написания исправления уже созданного поста
    return (
        <div>
            <textarea value={newPostText} onChange={(event) => {
                changeNewPostText(event.target.value);
            }}></textarea>
            <button onClick={sendNewPost}>добавить пост</button>
            <div>{uiposts}</div>
        </div>
    )
}

export default NewPost;